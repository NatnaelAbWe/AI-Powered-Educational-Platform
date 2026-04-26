from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.config.database import get_db
from app.modules.auth.router import router as auth_router
from app.modules.courses.router import router as course_router
from app.modules.ai.router import router as ai_router
from fastapi.middleware.cors import CORSMiddleware 


app = FastAPI(title="SkillPath AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth", tags=["Authentication"])
app.include_router(course_router, prefix="/courses", tags=["Courses"])
app.include_router(ai_router, prefix="/ai", tags=["AI Intelligence"])


@app.get("/")
def home(): return {"message": "SkillPath API is running"}

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"status": "success", "database": "PostgreSQL Connected"}
    except Exception as e:
        return {"status": "error", "message": str(e)}