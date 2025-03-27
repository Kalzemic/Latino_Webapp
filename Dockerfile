FROM node:18-alpine AS builder

WORKDIR /app


COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build 

# Step 2: Serve the app using nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
