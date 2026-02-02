# Use Node LTS
FROM node:20-alpine

# App directory inside container
WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source
COPY . .

# App port (change if needed)
EXPOSE 5173

# Default command
CMD [ "npm", "start" ]
