---
name: python
description: Python development tasks including creating scripts, managing virtual environments, running tests, installing packages, and project setup. Use when working with Python, FastAPI, Django, Flask, or related frameworks.
---

## Python Development Skill

You are a Python development assistant. When invoked, help with Python tasks following these guidelines.

## IMPORTANT: Read Project Config First

Before executing any command, read the project-specific config file at `config.md` in this skill's directory (`.opencode/skills/python/config.md` or `~/.config/opencode/skills/python/config.md`). This file contains:
- Framework choice (FastAPI, Django, Flask)
- Python version and package manager
- Directory structure and entry points
- Virtual environment setup
- Database, ORM, and migration commands
- Project-specific commands

**Always follow the patterns and paths from config.md instead of defaults.** If config.md is not found, fall back to the defaults below.

## Commands

Based on the arguments provided, perform the appropriate action:

### Project Setup
- `init` - Initialize a Python project with pyproject.toml, src layout, and virtual environment
- `venv` - Create virtual environment (uses package manager from config)
- `install` - Install dependencies
- `install <pkg>` - Install a package
- `freeze` - Lock/save dependencies

### Package Managers (check config.md for which one to use)

**uv (default, recommended)**:
- `uv init` - Initialize project: `uv init`
- `uv venv` - Create venv: `uv venv`
- `uv add <pkg>` - Add dependency: `uv add <pkg>`
- `uv add --dev <pkg>` - Add dev dependency: `uv add --dev <pkg>`
- `uv sync` - Install all dependencies: `uv sync`
- `uv run <cmd>` - Run command in venv: `uv run <cmd>`
- `uv lock` - Lock dependencies: `uv lock`
- `uv pip install <pkg>` - Install via pip compatibility: `uv pip install <pkg>`

**pipenv**:
- `pipenv init` - Initialize: `pipenv --python 3.12`
- `pipenv install` - Install from Pipfile: `pipenv install`
- `pipenv install <pkg>` - Add dependency: `pipenv install <pkg>`
- `pipenv install --dev <pkg>` - Add dev dependency: `pipenv install --dev <pkg>`
- `pipenv shell` - Activate venv: `pipenv shell`
- `pipenv run <cmd>` - Run command: `pipenv run <cmd>`
- `pipenv lock` - Lock dependencies: `pipenv lock`
- `pipenv graph` - Show dependency tree: `pipenv graph`

**pip (legacy)**:
- `pip venv` - Create venv: `python3 -m venv .venv && source .venv/bin/activate`
- `pip install` - Install: `pip install -r requirements.txt`
- `pip install <pkg>` - Install package: `pip install <pkg>`
- `pip freeze` - Save deps: `pip freeze > requirements.txt`

### Development
- `run <file>` - Run a Python script: `python <file>`
- `test` - Run tests: `python -m pytest`
- `test <path>` - Run specific tests: `python -m pytest <path> -v`
- `lint` - Run linter: `ruff check .`
- `format` - Format code: `ruff format .`
- `typecheck` - Type check: `mypy .`

### Frameworks
- `fastapi` - Create a FastAPI project structure
- `django <name>` - Create a Django project: `django-admin startproject <name>`
- `flask` - Create a Flask project structure

### Utilities
- `repl` - Start Python REPL: `python3`
- `shell` - Activate venv and open shell

## Conventions

When generating Python code:

1. **Use type hints** for all function signatures
2. **Docstrings** in Google style for public functions
3. **File structure**: flat for small projects, src layout for packages
4. **Naming**: snake_case for functions/variables, PascalCase for classes
5. **Error handling**: specific exceptions, not bare `except`
6. **Imports**: standard library, third-party, local (separated by blank lines)
7. **Testing**: pytest with fixtures, parametrize for multiple cases

## Project Template (pyproject.toml)

```toml
[project]
name = "my-project"
version = "0.1.0"
requires-python = ">=3.12"
dependencies = []

[project.optional-dependencies]
dev = [
    "pytest",
    "ruff",
    "mypy",
]

[tool.ruff]
target-version = "py312"
line-length = 88

[tool.pytest.ini_options]
testpaths = ["tests"]
```

## FastAPI Template

```python
from fastapi import FastAPI

app = FastAPI()


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok"}
```

## Test Template

```python
import pytest


class TestFeature:
    def test_should_do_something(self):
        # Arrange
        input_data = ...

        # Act
        result = function(input_data)

        # Assert
        assert result == expected
```
