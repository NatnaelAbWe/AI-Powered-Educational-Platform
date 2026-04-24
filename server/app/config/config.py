from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "SkillPath AI"
    DATABASE_URL: str = "postgresql://user:password@localhost/skillpath"
    SECRET_KEY: str = "YOUR_SUPER_SECRET_KEY_CHANGE_ME"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    
    # AI & Payments
    GROQ_API_KEY: Optional[str] = None
    CHAPA_AUTH_KEY: Optional[str] = None

    class Config:
        env_file = ".env"

settings = Settings()