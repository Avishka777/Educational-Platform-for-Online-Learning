FROM node:20.12.2

RUN npm install -g nodemon

WORKDIR /app/gateway

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "run", "start"]