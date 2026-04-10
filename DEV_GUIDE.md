# Dev Guide

## Project Purpose
API testing dashboard backend (weather service)

## Architecture
- Microservice: weather-gateway-service
- Layered structure:
  - routes
  - controllers
  - services
  - clients
  - config

## Rules
- Never expose API keys in frontend
- Use `.env` for secrets
- Keep the service simple and easy to deploy
- File deliveries must be ZIP archives
- ZIP archives should contain only changed files when sending updates
- Every changed file must be included in its full final version
- Preserve directory structure so files can be replaced directly

## Run
```bash
npm install
npm run dev
```

## Endpoints
- `GET /`
- `GET /health`
- `GET /api/weather/current?city=Warszawa`
