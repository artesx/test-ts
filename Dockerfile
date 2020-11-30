FROM node:14.15.1-alpine

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

ENV PATH=$PATH:./node_modules/.bin

COPY  --chown=node:node package.json package-lock.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]