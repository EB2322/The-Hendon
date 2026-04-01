FROM node:18-slim AS frontend-build

WORKDIR /app/angular
COPY angular/package*.json ./
RUN npm ci
COPY angular/ ./
RUN npm run build

FROM python:3.12-slim

WORKDIR /app
COPY . .
COPY --from=frontend-build /app/angular/dist ./angular/dist

EXPOSE 5500

CMD ["python", "server.py"]
