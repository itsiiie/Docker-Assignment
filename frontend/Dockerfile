# Use lightweight image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port used by your app
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
