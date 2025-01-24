FROM node:22.11.0

WORKDIR /app

COPY . .

EXPOSE 5173

CMD ["npx", "serve", "-s", "dist", "-p", "5173"]