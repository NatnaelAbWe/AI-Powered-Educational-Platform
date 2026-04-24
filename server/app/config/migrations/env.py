from logging.config import fileConfig
from sqlalchemy import engine_from_config
from sqlalchemy import pool
from alembic import context

# --- IMPORT YOUR MODELS AND BASE ---
import os
import sys
from dotenv import load_dotenv

# This adds the root 'server' directory to the python path
# so that 'from app...' imports work correctly
sys.path.insert(0, os.path.realpath(os.path.join(os.path.dirname(__file__), '..', '..', '..')))

from app.config.database import Base
from app.modules.users.models import User  # Import your models here!

# --- LOAD ENV ---
load_dotenv()
database_url = os.getenv("DATABASE_URL")

# this is the Alembic Config object
config = context.config

# Interpret the config file for Python logging.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# Set the target metadata for autogenerate
target_metadata = Base.metadata

def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    # We override the sqlalchemy.url from alembic.ini with the one from .env
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
        url=database_url, # <--- THIS OVERRIDES THE "driver" ERROR
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, 
            target_metadata=target_metadata
        )

        with context.begin_transaction():
            context.run_migrations()

# Keep the rest of the file (run_migrations_offline, etc.) as default
# Just make sure they also use the 'database_url' if needed