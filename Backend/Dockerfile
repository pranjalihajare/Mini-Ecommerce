# backend/Dockerfile

# Use official Node.js
FROM node:18-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["npm", "run", "start"]