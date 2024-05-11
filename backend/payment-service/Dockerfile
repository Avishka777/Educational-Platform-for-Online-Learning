FROM node:18.19.1

RUN npm install -g nodemon

WORKDIR /app/auth-service

COPY . .

RUN npm install

EXPOSE 5003

CMD ["npm", "run", "start"]