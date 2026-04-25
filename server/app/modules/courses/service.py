from sqlalchemy.orm import Session
from .models import Lesson, UserProgress

class CourseService:
    @staticmethod
    def get_course_roadmap(db: Session, course_id: int, user_id: int):
        lessons = db.query(Lesson).filter(Lesson.course_id == course_id).order_by(Lesson.order_index).all()
        
        completed_lessons = db.query(UserProgress.lesson_id).filter(
            UserProgress.user_id == user_id
        ).all()
        completed_ids = {row[0] for row in completed_lessons}

        roadmap = []
        can_unlock_next = True 

        for lesson in lessons:
            status = "LOCKED"
            
            if lesson.id in completed_ids:
                status = "COMPLETED"
                can_unlock_next = True 
            elif can_unlock_next:
                status = "UNLOCKED"
                can_unlock_next = False 
            
            roadmap.append({
                "id": lesson.id,
                "title": lesson.title,
                "order": lesson.order_index,
                "status": status
            })
            
        return roadmap