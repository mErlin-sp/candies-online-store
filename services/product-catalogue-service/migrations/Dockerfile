# Use a base image with Node.js installed
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install db-migrate
RUN npm install -g db-migrate db-migrate-mysql

# Copy the migration files and database configuration
COPY migrations/ /app/migrations/
COPY database.json /app/database.json

## Set the entrypoint command
#CMD ["db-migrate", "up", "--config", "./database.json", "--env", "prod"]