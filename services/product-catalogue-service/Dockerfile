# Use a base image with Node.js installed
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Expose the port that the Express.js app listens on
EXPOSE 3001

# Start the Express.js app
CMD ["npm", "start"]
