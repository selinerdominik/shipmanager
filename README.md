# Shipmanager

**Shipmanager** is a simple full-stack application that uses:
- **Spring Boot** for its backend  
- **React** (Single-Page Application) for its frontend  
- **PostgreSQL** as its database  

---

## Requirements

- **Java** 21  
- **Node.js** 22  
- **Docker** (to run PostgreSQL via Docker Compose)  

## How to run:
In order to run this app locally, the three components need to be started.
- **Postgres:** `docker-compose up` in root folder
- **Backend:** `mvn spring-boot:run` in backend folder
- **Frontend:** `npm run dev` in frontend folder

## How to use:
After starting the app, you can open `http://localhost:5173/` and login with the following user credentials defined in application.yml:
- **Username:** user
- **Password:** password

