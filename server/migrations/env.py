import os
import sys
from logging.config import fileConfig
from sqlalchemy import engine_from_config, pool
from alembic import context
from pathlib import Path
from dotenv import load_dotenv
from app.config.database import Base
from app.modules.users.models import User
from app.modules.courses.models import Course, Lesson, UserProgress, Enrollment


# 1. Get the absolute path to the 'server' folder
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

# 2. Force load the .env file from the absolute path
load_dotenv(BASE_DIR / ".env")

from app.config.database import Base
from app.modules.users.models import User

config = context.config
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

target_metadata = Base.metadata

def run_migrations_online() -> None:
    # 3. Get the URL and ensure it's the Neon one
    url = os.getenv("DATABASE_URL")
    
    # Debug print: This will show in your terminal when you run alembic
    # It should show 'neon.tech', NOT 'supabase.co'
    print(f"--- MIGRATING TO: {url.split('@')[-1].split('/')[0]} ---")

    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
        url=url,
    )

    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)
        with context.begin_transaction():
            context.run_migrations()

run_migrations_online()