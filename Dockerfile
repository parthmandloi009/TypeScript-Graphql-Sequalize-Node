FROM node:16 


RUN npm install

COPY . .

CMD ["node","./src/index.ts"]