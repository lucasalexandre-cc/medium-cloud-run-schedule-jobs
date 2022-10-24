# build
FROM node:16.14 as build
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

# run application
FROM node:16.14
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
COPY --from=build /usr/src/app/dist ./dist

CMD ["npm", "run", "start"]



