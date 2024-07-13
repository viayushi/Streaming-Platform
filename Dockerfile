
# Use the base Ubuntu Focal image
FROM ubuntu:focal

# Update package repositories and install necessary packages
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y nodejs ffmpeg

# Set working directory for subsequent commands
WORKDIR /home/app

# Install nodemon globally using npm
RUN npm install -g nodemon

# Set the default command to run when a container starts
CMD ["nodemon", "index.js"]
