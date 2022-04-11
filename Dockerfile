FROM node:16.14.2-slim

RUN apt update

WORKDIR /usr/src/app

COPY package*.json yarn.lock .sequelizerc ./

RUN yarn install && yarn cache clean

COPY ./src ./src

COPY docker-entrypoint.sh /usr/bin
RUN chmod +x /usr/bin/docker-entrypoint.sh
ENTRYPOINT ["/usr/bin/docker-entrypoint.sh"]
