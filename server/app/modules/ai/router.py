from fastapi import APIRouter, Depends
from . import schemas
from .service import AIService 
from app.modules.auth.deps import get_current_user

router = APIRouter()

@router.post("/explain", response_model=schemas.AIResponse)
async def explain_concept(req: schemas.AIExplanationRequest, user=Depends(get_current_user)):
    answer = await AIService.explain_concept(req.concept, req.context)
    return {"answer": answer}

@router.post("/fix-code", response_model=schemas.AIResponse)
async def fix_code(req: schemas.AICodeRequest, user=Depends(get_current_user)):
    answer = await AIService.review_code(req.code, req.language)
    return {"answer": answer}

@router.post("/recommend-path", response_model=schemas.AIResponse)
async def recommend_path(req: schemas.AIRoadmapRequest, user=Depends(get_current_user)):
    answer = await AIService.suggest_path(req.goal)
    return {"answer": answer}