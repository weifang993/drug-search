# Dockerfile
# Reference - https://medium.com/bb-tutorials-and-thoughts/how-to-serve-angular-application-with-nginx-and-docker-3af45be5b854
# stage1 as builder
FROM node:14-alpine as builder

# copy the package.json to install dependencies
COPY package.json ./

# Install the dependencies and make the folder
# To anwser prompt in post install script, we need to send "N"
RUN echo "N" | npm install && mkdir /app-ui && mv ./node_modules ./app-ui 

WORKDIR /app-ui

COPY . .

# Build the project and copy the files
RUN npm run ng build 

# stage2 builds the final image
# nginx unprivileged exposes port 8080
FROM nginxinc/nginx-unprivileged

WORKDIR /usr/share/nginx/html 

# Copy from the stahg 1
COPY --from=builder /app-ui/dist/drug-search /usr/share/nginx/html

