FROM node:18-slim AS frontend-build

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

FROM python:3.12-slim

WORKDIR /app
COPY . .
COPY --from=frontend-build /app/frontend/dist ./frontend/dist

EXPOSE 5500

CMD ["python", "server.py"]
