# MERN Docker Template
This template is a full-stack MERN (MongoDB, Express.js, React, Node.js) application containerized using Docker and Docker Compose. It provides an easy way to run your application in both development and production environments.

## Key Features
- MERN Stack : MongoDB, Express.js, React (built with Vite), and Node.js.
- Dockerized : All services run inside separate Docker containers managed by Docker Compose.
- Dev and Prod Modes : Supports both development and production environments.

## Prerequisites
Before getting started, ensure you have the following installed:
- Docker - [Download Docker](https://www.docker.com/)
- Docker Compose - Usually included with Docker installation.

## Getting Started
### 1. Clone the Repository
clone this repository using the following command:

```bash
git clone https://github.com/Firdaus909/MERN-Docker-Template.git
cd MERN-Docker-Template
```

### 2. Configure .env File
Copy the .env.example file to .env and configure as needed.

### For Linux/Mac:

```bash
cp .env.example .env
```

### For Windows (Command Prompt):
```cmd
copy .env.example .env
```

Edit the .env file to include relevant information such as MongoDB connection strings, ports, and other environment variables.

### 3. Running the Application
### Development Mode
To run the application in development mode, use the following command:

```bash
BUILD_TARGET=development NODE_ENV=development docker-compose up --build
```

This command will build the Docker containers in development mode, where the source code is mounted directly into the containers for easier development.

### Production Mode
To run the application in production mode, use the following command:
```bash
BUILD_TARGET=production NODE_ENV=production docker-compose up --build
```
Production mode ensures the application is built in an optimized version for high performance.

## Accessing the Application
After running Docker Compose, the application by default can be accessed at:
- Frontend (React with Vite): `http://localhost:5173`
- Backend (Node.js + Express.js): `http://localhost:5000`

You can change the ports by adjusting the .env file.

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.