FROM nginx:1.25.5

COPY ./sup19ru.conf /etc/nginx/conf.d/
COPY . /var/www/html/sup19ru/