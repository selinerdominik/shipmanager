"Shipmanager" is a simple full stack utilizing Spring Boot for its backend,a simple React SPA for its frontend and Postgresql as the database.

## Requirements:
Java 21
Node.js 22
Docker

## How to run:
In order to run this app locally, the three components need to be started.
- Postgres: `docker-compose up` in root folder
- Backend: `mvn spring-boot:run` in backend folder
- Frontend: `npm run dev` in frontend folder
