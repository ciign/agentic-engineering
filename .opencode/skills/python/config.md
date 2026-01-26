# Python Project Config

## Project
- Framework: `FastAPI` <!-- FastAPI, Django, Flask, none -->
- Python version: `3.12`
- Package manager: `uv` <!-- uv, pipenv, pip, poetry, pdm -->

## Structure
- Source: `./src`
- Tests: `./tests`
- Config: `./pyproject.toml`
- Entry point: `./src/main.py`

## Virtual Environment
- Path: `./.venv`
- Activate: `source .venv/bin/activate`
- Managed by: `uv` <!-- uv manages venv automatically -->

## Commands
- Run: `uv run uvicorn src.main:app --reload`
- Test: `uv run pytest -v`
- Lint: `uv run ruff check .`
- Format: `uv run ruff format .`
- Type check: `uv run mypy src/`
- Install all: `uv sync`
- Add dependency: `uv add <package>`
- Add dev dependency: `uv add --dev <package>`
- Lock: `uv lock`

## Database
- Type: `PostgreSQL` <!-- PostgreSQL, SQLite, MongoDB, none -->
- ORM: `SQLAlchemy` <!-- SQLAlchemy, Django ORM, Tortoise, none -->
- Migrations: `alembic` <!-- alembic, django, none -->
- Migrate: `alembic upgrade head`

## API
- Docs: `http://localhost:8000/docs`
- Port: `8000`

## Notes
<!-- Add any project-specific Python notes here -->
