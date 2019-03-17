# Dockerfile
# FROM nginx:alpine
# use non-root image
FROM bitnami/nginx

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/drug-search/ .