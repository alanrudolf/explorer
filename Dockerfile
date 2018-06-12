FROM node:latest

ENV EXPLORER_VERSION v1.7.1 

WORKDIR /explorer

COPY . .

RUN npm install --production

CMD cd /explorer && npm start 
