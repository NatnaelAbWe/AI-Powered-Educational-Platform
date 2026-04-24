from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str
    DATABASE_URL: str 
    SECRET_KEY: str 
    ALGORITHM: str 
    ACCESS_TOKEN_EXPIRE_MINUTES: int 
    REFRESH_TOKEN_EXPIRE_DAYS: 
    
    # AI & Payments
    GROQ_API_KEY: Optional[str] 
    CHAPA_AUTH_KEY: Optional[str] 

    class Config:
        env_file = ".env"

settings = Settings()