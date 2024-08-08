FROM node:21
WORKDIR /teste-rabbit-nestjs/gateway-api
COPY package*.json ./
RUN npm install
EXPOSE 3000
COPY . .
RUN npm run build
ENTRYPOINT ["npm", "start"]