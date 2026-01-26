# Docker Project Config

## Dockerfiles
- Primary: `./Dockerfile`
- Dev: `./Dockerfile.dev`

## Compose
- File: `./docker-compose.yml`
- Dev override: `./docker-compose.dev.yml`

## Services
| Service | Port | Description |
|---------|------|-------------|
| app     | 3000 | Main application |
| db      | 5432 | PostgreSQL database |

## Registry
- Registry: `ghcr.io/myorg/myapp`
- Tag strategy: `git-sha`

## Common Commands
- Start dev: `docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d`
- Rebuild: `docker compose build --no-cache app`
- Migrate DB: `docker compose exec app python manage.py migrate`
- View logs: `docker compose logs -f app`

## Environment
- Env file: `.env`
- Required vars: `DATABASE_URL`, `SECRET_KEY`, `REDIS_URL`

## Notes
<!-- Add any project-specific Docker notes here -->
