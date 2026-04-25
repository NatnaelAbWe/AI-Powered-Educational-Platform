import bcrypt
from datetime import datetime, timedelta
from jose import jwt
from app.config.config import settings

def hash_password(password: str) -> str:
    # 1. Convert password to bytes
    password_bytes = password.encode('utf-8')
    # 2. Generate a salt
    salt = bcrypt.gensalt()
    # 3. Hash the password
    hashed_password = bcrypt.hashpw(password_bytes, salt)
    # 4. Return as string so we can save it in the DB
    return hashed_password.decode('utf-8')

def verify_password(plain_password: str, hashed_password: str) -> bool:
    # 1. Convert both to bytes
    password_bytes = plain_password.encode('utf-8')
    hashed_bytes = hashed_password.encode('utf-8')
    # 2. Check if they match
    return bcrypt.checkpw(password_bytes, hashed_bytes)

def create_access_token(subject: str):
    expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode = {"exp": expire, "sub": str(subject)}
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)