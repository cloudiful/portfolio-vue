My Nginx config
```
server {
    listen 443 ssl http2;
    ssl_certificate     /usr/share/nginx/ssl/portfolio.cloudiful.cn.crt;
    ssl_certificate_key /usr/share/nginx/ssl/portfolio.cloudiful.cn.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
    keepalive_timeout   70;

    ssl_session_cache   shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets on;
    ssl_stapling        on;
    ssl_stapling_verify on;

    server_name _;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    #access_log var/log/nginx/access.log main;
    #error_log var/log/nginx/error.log error;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location /api {
        proxy_pass   https://127.0.0.1:8080/api;
    }

}
```
