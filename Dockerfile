FROM node:18.7.0

RUN npm install -g npm@8.19.1

WORKDIR "/app"

COPY package*.json ./

RUN npm install

COPY . .

RUN chown -R node /app/node_modules

USER node

EXPOSE 7000

CMD ["npm", "start"]