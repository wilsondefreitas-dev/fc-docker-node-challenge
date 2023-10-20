FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

# docker build -t wilsondef/nginx ./nginx
# docker run --name nginx -it -d --rm -p 8080:80 --network node wilsondef/nginx
# docker exec -it nginx sh 