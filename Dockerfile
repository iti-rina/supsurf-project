FROM nginx

COPY ./sup19ru.conf /etc/nginx/conf.d/
COPY . /var/www/html/sup19ru/