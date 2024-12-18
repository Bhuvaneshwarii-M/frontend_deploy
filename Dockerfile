# Use the official Node.js image as the base image
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . ./

# Build the app for production (using 'npm run build', not 'npm start')
RUN npm run build

# Use a smaller image to serve the static files
FROM nginx:alpine

# Copy the build output to the Nginx web server's public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
