from pydantic import BaseModel, EmailStr, Field
from app.modules.users.models import UserRole

class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=72)
    full_name: str
    role: UserRole = UserRole.STUDENT

class UserLogin(BaseModel):
    email: EmailStr
    password: str = Field(..., max_length=72)

class UserResponse(BaseModel):
    id: int
    email: EmailStr
    full_name: str
    role: UserRole
    class Config: from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse