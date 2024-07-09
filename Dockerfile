FROM node:20

WORKDIR /usr/src/app

RUN echo "Contents before removing everything:" && ls -al

RUN echo "Now removing everything..."
RUN rm -rf /usr/src/app/* /usr/src/app/.* 2> /dev/null || true
RUN echo "Contents after removing everything:" && ls -al

COPY . .
RUN echo "Contents after copying everything:" && ls -al

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
