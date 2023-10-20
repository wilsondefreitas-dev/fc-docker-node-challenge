FROM node:18

WORKDIR /usr/src/app

COPY . .

CMD [ "node", "--watch", "index.js" ]

# docker build -t wilsondef/node ./node   
# docker run -d --rm -it --name node --network node wilsondef/node