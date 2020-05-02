FROM node:alpine

WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

COPY package.json /usr/app/package.json
RUN yarn global add @vue/cli
RUN yarn

COPY . .

CMD ["yarn", "run", "dev"]