FROM node:18-alpine

WORKDIR /app

# Copy npm config first (to cache install layers better)
COPY .npmrc .npmrc

# Copy the rest of the app
COPY . .

RUN npm install

# 3002
EXPOSE 300   

CMD npm start
