from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.config.database import get_db
from app.modules.auth.router import router as auth_router

app = FastAPI(title="SkillPath AI")

app.include_router(auth_router, prefix="/auth", tags=["Authentication"])

@app.get("/")
def home(): return {"message": "SkillPath API is running"}

@app.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"status": "success", "database": "PostgreSQL Connected"}
    except Exception as e:
        return {"status": "error", "message": str(e)}