FROM nginx:1.25.5

COPY ./configs/sup19ru.conf /etc/nginx/conf.d/

WORKDIR /var/www/html/sup19ru

COPY . .
RUN rm -rf .dockerignore Dockerfile configs