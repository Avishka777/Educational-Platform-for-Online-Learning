FROM node:18.19.1

RUN npm install -g nodemon

WORKDIR /app/notification-service

COPY . .

RUN npm install

EXPOSE 5004

CMD ["npm", "run", "start"]