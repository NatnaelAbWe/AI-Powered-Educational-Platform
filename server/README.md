# Backend Architecture: SkillPath

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
Author: [Your Name/Backend Lead]
Reviewer: Sosena Gossaye
Status: Draft / Pending Review
```
