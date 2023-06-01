# Use the official MySQL image as the base image
FROM mysql:8.0

# Set environment variables for MySQL configuration
#ENV MYSQL_ROOT_PASSWORD=db_root
#ENV MYSQL_DATABASE=db
#ENV MYSQL_USER=db_user
#ENV MYSQL_PASSWORD=db_user

# Copy the SQL script to initialize the database
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the default MySQL port
EXPOSE 3306
