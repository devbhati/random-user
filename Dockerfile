FROM node:18-alpine
WORKDIR /new-relic/
COPY public/ /new-relic/public
COPY src/ /new-relic/src
COPY package.json /new-relic/
RUN npm install
CMD ["npm", "start"]