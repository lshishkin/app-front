# Этап 1: Сборка приложения
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем только файлы для установки зависимостей (для лучшего кэширования)
COPY package.json package-lock.json ./
# Или yarn.lock / pnpm-lock.yaml, если используете другой менеджер

RUN npm ci  # Или npm install --production=false

# Копируем остальной код
COPY . .

# Собираем продакшн-версию
RUN npm run build

# Этап 2: Финальный лёгкий образ для сервировки
FROM nginx:alpine

# Копируем собранные статические файлы из предыдущего этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Опционально: кастомный конфиг Nginx для SPA (чтобы роутинг работал на клиентской стороне)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]