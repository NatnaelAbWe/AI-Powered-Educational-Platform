from sqlalchemy.orm import Session
from .models import Course, Lesson, Enrollment, UserProgress
from .schemas import CourseCreate, LessonCreate  

class CourseService:
    @staticmethod
    def create_course(db: Session, course_in: CourseCreate, teacher_id: int):
        db_course = Course(**course_in.model_dump(), teacher_id=teacher_id)
        db.add(db_course)
        db.commit()
        db.refresh(db_course)
        return db_course

    @staticmethod
    def add_lesson(db: Session, lesson_in: LessonCreate, course_id: int):
        db_lesson = Lesson(**lesson_in.model_dump(), course_id=course_id)
        db.add(db_lesson)
        db.commit()
        db.refresh(db_lesson)
        return db_lesson

    @staticmethod
    def get_roadmap(db: Session, course_id: int, user_id: int):
        course = db.query(Course).filter(Course.id == course_id).first()
        lessons = db.query(Lesson).filter(Lesson.course_id == course_id).order_by(Lesson.order_index).all()
        
        # Get user's completed lessons
        completed = db.query(UserProgress.lesson_id).filter(UserProgress.user_id == user_id).all()
        completed_ids = {c[0] for c in completed}

        roadmap = []
        unlocked_found = False

        for lesson in lessons:
            if lesson.id in completed_ids:
                status = "COMPLETED"
            elif not unlocked_found:
                status = "UNLOCKED"
                unlocked_found = True 
            else:
                status = "LOCKED"
            
            roadmap.append({
                "id": lesson.id,
                "title": lesson.title,
                "order_index": lesson.order_index,
                "status": status
            })
            
        return {"course_id": course.id, "course_title": course.title, "lessons": roadmap}