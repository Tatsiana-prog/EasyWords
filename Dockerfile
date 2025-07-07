# --- ЭТАП 1: Сборка (Builder) ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Используем команду сборки из вашего package.json
RUN npm run build

# --- ЭТАП 2: Продакшн (Production) ---
FROM nginx:stable-alpine
# Копируем из папки 'dist', так как вы используете Vite
COPY --from=builder /app/dist /usr/share/nginx/html
# Копируем кастомный конфиг NGINX для React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
