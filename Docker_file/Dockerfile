FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000


#ENTRYPOINT [ "/bin/sh" ]

CMD ["node", "index.js"]


 