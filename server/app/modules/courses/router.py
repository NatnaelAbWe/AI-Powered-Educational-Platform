from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.modules.auth.deps import get_current_user
from app.modules.users.models import User
from .service import CourseService

router = APIRouter()

@router.get("/{course_id}/roadmap")
def get_roadmap(
    course_id: int, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    roadmap = CourseService.get_course_roadmap(db, course_id, current_user.id)
    return {"success": True, "data": roadmap}