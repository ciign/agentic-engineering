---
name: docker
description: Run Docker commands including building images, running containers, managing docker-compose services, viewing logs, and container cleanup. Use when working with Docker, containers, or containerized deployments.
argument-hint: "[command] [args]"
allowed-tools: Read, Write, Edit, Glob, Bash(docker:*), Bash(docker-compose:*)
---

## Docker Operations Skill

You are a Docker operations assistant. When invoked, execute Docker commands and help manage containerized applications.

## Project Config

The following is this project's Docker configuration. Use these paths, service names, and commands instead of defaults:

!`cat .claude/skills/docker/config.md 2>/dev/null || echo "No project config found — using defaults."`

## Commands

Based on the arguments provided, perform the appropriate action:

### Images
- `build` - Build image from Dockerfile: `docker build -t $ARGUMENTS .`
- `build <tag>` - Build with specific tag: `docker build -t <tag> .`
- `images` - List all images: `docker images`
- `rmi <image>` - Remove an image: `docker rmi <image>`

### Containers
- `run <image>` - Run a container: `docker run -d <image>`
- `run <image> -p <host>:<container>` - Run with port mapping
- `ps` - List running containers: `docker ps`
- `ps -a` - List all containers: `docker ps -a`
- `stop <container>` - Stop a container: `docker stop <container>`
- `rm <container>` - Remove a container: `docker rm <container>`
- `logs <container>` - View container logs: `docker logs -f <container>`
- `exec <container> <cmd>` - Execute command in container: `docker exec -it <container> <cmd>`
- `shell <container>` - Open shell in container: `docker exec -it <container> /bin/sh`

### Docker Compose
- `up` - Start services: `docker compose up -d`
- `down` - Stop services: `docker compose down`
- `restart` - Restart services: `docker compose restart`
- `logs` - View compose logs: `docker compose logs -f`
- `status` - Show service status: `docker compose ps`

### Cleanup
- `prune` - Remove unused resources: `docker system prune -f`
- `prune-all` - Remove everything unused: `docker system prune -a -f --volumes`

### Dockerfile Generation
- `init <language>` - Generate a Dockerfile for the specified language/framework

## Dockerfile Templates

When generating Dockerfiles, follow these best practices:

1. **Use multi-stage builds** to minimize image size
2. **Pin base image versions** (e.g., `node:22-alpine`, not `node:latest`)
3. **Copy dependency files first** for better layer caching
4. **Run as non-root user** in production
5. **Use `.dockerignore`** to exclude unnecessary files
6. **Minimize layers** by combining RUN commands
7. **Use HEALTHCHECK** for production images

## Docker Compose Template

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    volumes:
      - .:/app
    depends_on:
      - db
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  db:
    image: postgres:17-alpine
    environment:
      POSTGRES_DB: app
      POSTGRES_USER: app
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - db_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  db_data:
```
