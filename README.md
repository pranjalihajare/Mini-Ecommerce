Naksh Jewels – Mini E-Commerce

A mini e-commerce application built with React (Vite), Node.js, Express, Redux, and MongoDB (or in-memory data). This project is fully Dockerized for easy setup and deployment.
It demonstrates:
Product listing with images, name, price, and Add to Cart
Cart page with quantity update and remove item options
Redux state management for cart
Responsive UI using plain CSS (no UI libraries)
Backend APIs with validation and error handling

Docker + Docker Compose deployment

📂 Project Structure
naksh-jewels-assignment/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   └── services/
│   ├── Dockerfile
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── data/
│   │   └── products.json
│   ├── server.js
│   ├── .env
│   └── Dockerfile
│
├── docker-compose.yml
├── .dockerignore
└── README.md

⚡ Features

Product listing with image, name, price, and Add to Cart button

Cart page with quantity increase/decrease and Remove button

Redux for state management

Responsive design with plain CSS (no Bootstrap, MUI, etc.)

Backend API endpoints with validation and error handling

Dockerized frontend and backend for easy deployment

🛠️ Prerequisites

Node.js (v18 recommended)

npm or yarn

Docker & Docker Compose installed

🔧 Setup Locally (Without Docker)
Backend
cd backend
npm install
npm run start      # Runs backend on http://localhost:5000

Frontend
cd frontend
npm install
npm run dev        # Runs frontend on http://localhost:5173 (Vite default)

🐳 Setup Using Docker
1️⃣ Build and Run Containers
docker compose up --build


Frontend will run on http://localhost:3000

Backend will run on http://localhost:5000

2️⃣ Stop Containers
docker compose down

3️⃣ Run Without Rebuilding
docker compose up

📝 Dockerfiles
Backend – backend/Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]

Frontend – frontend/Dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Run stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

🐙 Docker Compose – docker-compose.yml
services:
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    container_name: mini_ecommerce_backend
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    container_name: mini_ecommerce_frontend
    ports:
      - "3000:80"
    depends_on:
      - backend
