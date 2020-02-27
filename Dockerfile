# Dockerfile
FROM nginxinc/nginx-unprivileged
COPY dist/drug-search/ /usr/share/nginx/html
