FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN echo "Contents after copying everything:" && ls -al

RUN npm install

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]
