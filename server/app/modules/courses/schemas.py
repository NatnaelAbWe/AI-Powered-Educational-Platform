from pydantic import BaseModel
from typing import List, Optional
from app.modules.users.models import UserRole

class LessonCreate(BaseModel):
    title: str
    content: str
    order_index: int

class CourseCreate(BaseModel):
    title: str
    description: str
    is_premium: bool = False
    price: float = 0.0

class LessonResponse(BaseModel):
    id: int
    title: str
    order_index: int
    status: str 

    class Config:
        from_attributes = True

class RoadmapResponse(BaseModel):
    course_id: int
    course_title: str
    lessons: List[LessonResponse]

class CourseResponse(BaseModel):
    id: int
    title: str
    description: str
    is_premium: bool
    price: float
    teacher_id: int

class Config:
    from_attributes = True