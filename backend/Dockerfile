# Stage 1: Development Environment
FROM node:20-alpine AS development

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 5000

# Start the server in development mode
CMD ["npm", "run", "dev"]

# Stage 2: Production Environment
FROM node:20-alpine AS production

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Build the app if necessary
RUN npm run build

# Expose the port
EXPOSE 5000

# Start the server in production mode
CMD ["npm", "start"]