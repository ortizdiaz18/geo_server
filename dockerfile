FROM node:16.18-alpine3.15

WORKDIR /app
COPY . .
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
