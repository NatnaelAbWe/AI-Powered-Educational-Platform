from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.modules.auth.deps import get_current_user
from app.modules.users.models import User, UserRole
from . import schemas, service

router = APIRouter()

@router.post("/", response_model=schemas.CourseCreate)
def create_course(
    course_in: schemas.CourseCreate, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    if current_user.role != UserRole.TEACHER:
        raise HTTPException(status_code=403, detail="Only teachers can create courses")
    return service.CourseService.create_course(db, course_in, current_user.id)

@router.post("/{course_id}/lessons")
def add_lesson(
    course_id: int,
    lesson_in: schemas.LessonCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    if current_user.role != UserRole.TEACHER:
        raise HTTPException(status_code=403, detail="Only teachers can add lessons")
    return service.CourseService.add_lesson(db, lesson_in, course_id)

@router.get("/{course_id}/roadmap", response_model=schemas.RoadmapResponse)
def get_roadmap(
    course_id: int, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    return service.CourseService.get_roadmap(db, course_id, current_user.id)

@router.post("/lessons/{lesson_id}/complete")
def complete_lesson(
    lesson_id: int, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    return CourseService.mark_lesson_completed(db, lesson_id, current_user.id)