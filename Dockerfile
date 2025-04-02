# Use Node.js base image
FROM node:22-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and packge-lock.json first (for caching dependencies)
COPY package*.json ./

# Install all dependencies (including devDep)
RUN npm install

# Copy all project files
COPY . .

# Build the NestJS application
RUN npm run build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Use nodemon for hot-reloading
CMD ["npm", "run", "start:prod"]