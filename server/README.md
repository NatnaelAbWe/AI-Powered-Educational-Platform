# SkillPath AI – Backend API

---

- SkillPath is a modern learning platform that uses AI to guide students through structured technical roadmaps. This backend, built with FastAPI, manages identity, roadmap progression logic, and AI-driven learning assistance.

- [Live API URL:](https://skillpath-api-kr9c.onrender.com)
- [Live API URL:](https://skillpath-api-kr9c.onrender.com)

# System Design

---

- The system is designed as a Decoupled Client-Server Architecture.
- Identity Layer: Uses JWT (JSON Web Tokens) for stateless authentication. Role-Based Access Control (RBAC) ensures that only Teachers can create content, while Students can track personal progress.
- Roadmap Engine: Unlike traditional course cards, this system treats lessons as nodes in a sequence. The backend calculates the state of each node (LOCKED, UNLOCKED, COMPLETED) in real-time by cross-referencing lesson order indexes with the user's completion history.
- Intelligence Layer: Integrated with Grok-3/Llama-3 via high-speed inference APIs. The system processes technical prompts to provide contextual explanations and code debugging.
- Data Persistence: A relational PostgreSQL database (hosted on Neon.tech) manages complex relationships between users, courses, and progress tracking.

# Backend Architecture: SkillPath

---

## Architecture Decisions

- FastAPI Framework: Chosen for its native asynchronous support (essential for AI processing and WebSockets) and automatic Swagger documentation.
- Feature-First Modular Structure: We opted for a domain-based folder structure (auth, courses, ai) rather than a traditional MVC structure. This ensures that as the platform adds features (like Chat or Video), the code remains maintainable and scalable.
- Database Migrations (Alembic): We use Alembic to ensure the cloud database (Neon) stays perfectly in sync with our local models without manual SQL execution.
- Pydantic V2: Used for strict data validation and serialization. Every request and response is validated against a schema to prevent data corruption.
- Specialized Port 6543 (Cloud DB): We decided to use Supabase/Neon's connection pooler port to ensure maximum compatibility with IPv4 networks common in Ethiopia.

## 1. Project Structure

- The backend follows a Feature-First Modular Architecture. This ensures that each domain is self-contained, making the system easier to scale and maintain as the platform grows.

```bash
skillpath-backend/
├── app/
│   ├── modules/             # Domain-specific logic
│   │   ├── auth/            # JWT, Login, Registration
│   │   ├── courses/         # Roadmaps, Lessons, Progress
│   │   ├── ai/              # Groq API integration, Prompt engineering
│   │   ├── payments/        # Chapa/Stripe logic & Webhooks
│   │   ├── chat/            # WebSocket handlers
│   │   └── users/           # Profile management & RBAC
│   ├── common/              # Shared logic (The "Kernel")
│   │   ├── guards/          # Auth & Role decorators
│   │   ├── exceptions/      # Global error handlers
│   │   ├── utils/           # Time, formatting, validators
│   │   └── constants/       # Enums (Roles, Statuses)
│   ├── files/               # File service (Local storage handler)
│   ├── config/              # Environment variables & DB settings
│   └── main.py              # Application entry point
├── migrations/              # Database versioning (Alembic)
└── tests/                   # Unit & Integration tests
```

## 2. Module Design

- Each module in app/modules/ is structured to maintain a strict separation of concerns:
- Controller (router.py): Defines API endpoints, handles HTTP status codes, and parses incoming requests.
- Service (service.py): The core business logic. Interacts with repositories and external APIs (Groq, Chapa).
- DTO/Schemas (schemas.py): Pydantic models for data validation (Request/Response).
- Models (models.py): Database entities (SQLAlchemy/SQLModel).
- Repository (repository.py - optional): Encapsulates direct database queries to keep the service layer clean.

## 3. Domain Mapping

| Domain        | Module   | Responsibility                                                  |
| ------------- | -------- | --------------------------------------------------------------- |
| Identity      | auth     | Token generation, refresh tokens, password hashing              |
| Learning      | courses  | Roadmap generation, lesson locking/unlocking, progress tracking |
| Intelligence  | ai       | Interfacing with Groq for code help and practice generation     |
| Finances      | payments | Chapa integration, payment verification, premium status         |
| Communication | chat     | WebSocket management and message persistence                    |
| Profiles      | users    | User metadata, role updates, and account settings               |

## 4. Controller vs. Service

- Controller: Should be "thin." Its only jobs are:
- Receiving the request.
- Validating input (via DTOs).
- Calling the appropriate Service method.
- Returning the standardized API response.
- Service: Should be "fat." This is where the logic lives:
- Checking if a student is allowed to unlock the next lesson.
- Calculating progress percentages.
- Communicating between modules (e.g., calling the Payment service from the Course service).

## 5. DTO & Validation

- We use Pydantic for all Data Transfer Objects (DTOs).
- Inbound: CourseCreate, LessonUpdate, UserLogin.
- Outbound: RoadmapView, ProgressResponse.
- Location: DTOs live within their respective module folders (`schemas.py`) to keep validation logic close to the domain.

## 6. Shared Layer (common/)

- The common/ directory contains tools used by all modules:
- Standardized Responses: A utility to ensure every API response follows the { "success": bool, "data": [], "error": null } format.
- Global Exception Handler: Middleware that catches errors and converts them into the standard error format.
- Base Model: A base class for database models (handling id, created_at, updated_at).

## 7. Auth & RBAC

- Authentication is handled via JWT in the common/guards/ - layer.
- Authentication: A dependency get_current_user extracts and validates the token.
- RBAC: A RoleChecker class is used as a dependency to restrict endpoints.
  Example: depends(RoleChecker([`teacher`, `admin`, `student`])).

## 8. Account Context

- The system distinguishes between user roles through the User model:
- Personal (Student): Default context focused on enrollment and progress.
- Creator (Teacher): Context focused on content ownership. A teacher "owns" a course, and the backend verifies ownership before allowing any edit/delete operations on roadmap nodes.

## 9. File Handling

- The FileService lives in its own top-level directory. Other modules (Chat, Courses) do not write to disk directly. Instead:
- A module receives a file.
- It passes the file stream to `FileService.upload()`.
- `FileService` saves the file to local storage and returns a relative URL/path.

## 10. Implementation Example: Enrollment Module

- DTO (modules/courses/schemas.py)

```python
   class EnrollmentRequest(BaseModel):
   course_id: int

class EnrollmentResponse(BaseModel):
enrollment_id: int
status: str
```

- Controller (modules/courses/router.py)

```python
@router.post("/enroll", response_model=EnrollmentResponse)
async def enroll_in_course(
data: EnrollmentRequest,
current_user: User = Depends(get_current_user),
service: CourseService = Depends()
):
return await service.enroll_user(current_user.id, data.course_id)
```

- Service (modules/courses/service.py)

```python
class CourseService:
async def enroll_user(self, user_id: int, course_id: int): # 1. Check if course exists
# 2. Check if already enrolled
# 3. Handle payment logic (if premium, check payment status)
# 4. Create record in Enrollment table
# 5. Return EnrollmentResponse
pass
```

# How to Run the Project

---

- Prerequisites
  - Python 3.10+
  - PostgreSQL (or a Neon.tech account)
  - Groq or xAI API Key

## 1. Clone and Install

```Bash
git clone https://github.com/NatnaelAbWe/AI-Powered-Educational-Platform.git
cd server
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

## 2. Environment Setup

- Create a .env file in the server/ directory:

```bash
DATABASE_URL="your_postgresql_url"
SECRET_KEY="your_random_secret_string"
ALGORITHM="HS256"
GROQ_API_KEY="your_ai_key"
```

## 3. Run Database Migrations

- Synchronize your database schema:

```Bash
alembic upgrade head
```

## 4. Start the Server

```Bash
uvicorn app.main:app --reload
```

- The API will be available at http://127.0.0.1:8000. Visit /docs for the interactive API documentation.

---

## Domain Mapping & Logic

| Domain       | Module  | Responsibility                                                                   |
| ------------ | ------- | -------------------------------------------------------------------------------- |
| Identity     | auth    | Password hashing, JWT generation, Role management                                |
| Learning     | courses | Roadmap logic: calculates if a lesson is **LOCKED** based on previous completion |
| Intelligence | ai      | Contextual AI help for concepts and code fixes                                   |
| Profiles     | users   | User metadata management and RBAC permission checks                              |

## API Endpoints Reference

### Documentation & Base

| Action          | Method | URL                                             |
| --------------- | ------ | ----------------------------------------------- |
| Swagger UI      | GET    | https://skillpath-api-kr9c.onrender.com/docs    |
| DB Health Check | GET    | https://skillpath-api-kr9c.onrender.com/test-db |
| API Home        | GET    | https://skillpath-api-kr9c.onrender.com/        |

---

### Authentication Module

| Action         | Method | URL                                                   |
| -------------- | ------ | ----------------------------------------------------- |
| Register User  | POST   | https://skillpath-api-kr9c.onrender.com/auth/register |
| Login (OAuth2) | POST   | https://skillpath-api-kr9c.onrender.com/auth/login    |
| My Profile     | GET    | https://skillpath-api-kr9c.onrender.com/me            |

---

### Course & Roadmap Module

| Action          | Method | URL                                                                          |
| --------------- | ------ | ---------------------------------------------------------------------------- |
| Create Course   | POST   | https://skillpath-api-kr9c.onrender.com/courses/                             |
| Add Lesson      | POST   | https://skillpath-api-kr9c.onrender.com/courses/{course_id}/lessons          |
| Get Roadmap     | GET    | https://skillpath-api-kr9c.onrender.com/courses/{course_id}/roadmap          |
| Complete Lesson | POST   | https://skillpath-api-kr9c.onrender.com/courses/lessons/{lesson_id}/complete |

---

### AI Intelligence Module (Requires Auth)

| Action           | Method | URL                                                       |
| ---------------- | ------ | --------------------------------------------------------- |
| Explain Concept  | POST   | https://skillpath-api-kr9c.onrender.com/ai/explain        |
| Fix Code Snippet | POST   | https://skillpath-api-kr9c.onrender.com/ai/fix-code       |
| Smart Path       | POST   | https://skillpath-api-kr9c.onrender.com/ai/recommend-path |

- Author: Natnael Abnew
- Reviewer: Sosena Gossaye
- Status: Reviewed
