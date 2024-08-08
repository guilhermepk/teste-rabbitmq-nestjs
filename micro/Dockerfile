FROM node:21
WORKDIR /teste-rabbitmq-nestjs/micro
COPY package*.json ./
RUN npm install
EXPOSE 3000
COPY . .
RUN npm run build
ENTRYPOINT ["npm", "start"]