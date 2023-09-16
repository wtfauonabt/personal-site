# Base image
FROM node:14 as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire Angular app
COPY . .

# Build the Angular app
RUN npm run build -- --prod

# Use Nginx as the web server
FROM nginx:latest

# Copy the built Angular app to Nginx's web root directory
COPY --from=builder /app/dist/your-angular-app /usr/share/nginx/html

# Copy custom Nginx configuration (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80