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

## Rules
- Never expose API keys in frontend
- Use .env for secrets
- Keep mapping logic separate
- Each layer has one responsibility

## Run
npm install
npm run dev

## Endpoint
GET /api/weather/current?city=Warszawa
