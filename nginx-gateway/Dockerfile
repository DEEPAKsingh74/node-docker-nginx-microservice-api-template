# Use official NGINX image as the base image
FROM nginx:1.25.4

# Copy custom NGINX configuration file to container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Command to start NGINX
CMD ["nginx", "-g", "daemon off;"]