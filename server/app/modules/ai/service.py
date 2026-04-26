import httpx
from app.config.config import settings

class AIService:
    @staticmethod
    async def get_explanation(concept: str):
        prompt = f"Explain this technical concept to a beginner in simple terms: {concept}"
        return await AIService._call_groq(prompt)

    @staticmethod
    async def get_code_help(code: str, error: str):
        prompt = f"I have this code:\n{code}\n\nIt gives this error: {error}. How do I fix it?"
        return await AIService._call_groq(prompt)

    @staticmethod
    async def _call_groq(prompt: str):
        url = "https://api.groq.com/openai/v1/chat/completions"
        headers = {
            "Authorization": f"Bearer {settings.GROQ_API_KEY}",
            "Content-Type": "application/json"
        }
        data = {
            "model": "mixtral-8x7b-32768", # High quality, fast model
            "messages": [{"role": "user", "content": prompt}]
        }
        
        async with httpx.AsyncClient() as client:
            response = await client.post(url, headers=headers, json=data, timeout=30.0)
            if response.status_code != 200:
                return "AI Assistant is currently busy. Please try again later."
            
            result = response.json()
            return result['choices'][0]['message']['content']