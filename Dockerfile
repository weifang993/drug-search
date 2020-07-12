# Dockerfile
FROM nginxinc/nginx-unprivileged
WORKDIR /usr/share/nginx/html
COPY dist/drug-search/ .