import httpx
from fastapi import HTTPException
from app.config.config import settings

class AIService:
    @staticmethod
    async def _call_groq(prompt: str):
        if not settings.GROQ_API_KEY:
            raise HTTPException(status_code=500, detail="AI API key not configured")

        url = "https://api.groq.com/openai/v1/chat/completions"
        
        headers = {
            "Authorization": f"Bearer {settings.GROQ_API_KEY}",
            "Content-Type": "application/json"
        }
        
        data = {
            "model": "llama-3.3-70b-versatile", 
            "messages": [
                {"role": "system", "content": "You are SkillPath AI, an expert technical tutor. Provide concise Markdown responses."},
                {"role": "user", "content": prompt}
            ]
        }

        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(url, headers=headers, json=data, timeout=60.0)
                if response.status_code != 200:
                    print(f"AI ERROR: {response.text}")
                    raise HTTPException(status_code=response.status_code, detail=f"AI Error: {response.text}")
                
                result = response.json()
                return result['choices'][0]['message']['content']
            except Exception as e:
                raise HTTPException(status_code=500, detail=str(e))

    @staticmethod
    async def explain_concept(concept: str, level: str):
        prompt = f"Explain the concept of '{concept}' for a {level} level student."
        return await AIService._call_groq(prompt)

    @staticmethod
    async def review_code(code: str, lang: str):
        prompt = f"Fix this {lang} code and explain why:\n\n```{lang}\n{code}\n```"
        return await AIService._call_groq(prompt)

    @staticmethod
    async def suggest_path(goal: str):
        prompt = f"Generate a 5-step learning roadmap for: '{goal}'."
        return await AIService._call_groq(prompt)