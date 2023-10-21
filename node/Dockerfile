FROM node:18

RUN apt update 
RUN apt install -y wget netcat-traditional
RUN wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for
RUN chmod +x /usr/bin/wait-for

USER node

WORKDIR /usr/src/app

COPY . .

# docker build -t wilsondef/node ./node   
# docker run -d --rm -it --name node --network node wilsondef/node