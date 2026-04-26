from pydantic import BaseModel
from typing import List, Optional

class AIExplanationRequest(BaseModel):
    concept: str
    context: Optional[str] = "beginner" 

class AICodeRequest(BaseModel):
    code: str
    language: str = "python"

class AIRoadmapRequest(BaseModel):
    goal: str 

class AIResponse(BaseModel):
    answer: str