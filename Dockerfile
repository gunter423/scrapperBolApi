FROM bolscrapper

WORKDIR /usr/src/scrapper-api
COPY package.json ./
COPY yarn.lock ./
RUN yarn
RUN yarn link "bolScrapper"
COPY . .
RUN echo DATABASE_URL="mysql://root:root@mysql:3306/bookDb" > .env

ENV DEBUG=express:*
CMD npx prisma db push && node src/index.js
EXPOSE 8001
