My Nginx config
```
server {
    listen 443 ssl http2;
    ssl_certificate     /usr/share/nginx/ssl/portfolio.cloudiful.cn.crt;
    ssl_certificate_key /usr/share/nginx/ssl/portfolio.cloudiful.cn.key;
    ssl_protocols       TLSv1.2 TLSv1.3;

    server_name portfolio.cloudiful.cn;

    #access_log var/log/nginx/access.log main;
    #error_log var/log/nginx/error.log error;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass   https://127.0.0.1:8080/api;
    }

}
```
