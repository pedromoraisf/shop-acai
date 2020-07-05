FROM node:alpine

WORKDIR /usr/api

ENV PATH /usr/api/node_modules/.bin:$PATH

COPY package.json /usr/api/package.json
RUN yarn

COPY . .

CMD ["yarn", "run", "dev"]