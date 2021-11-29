# app-clips-server-example
Tested on Ubuntu 20.04.3 LTS

By steps
1. Clone this repository on your server in root directory (I used hetzner)
2. Specify ngninx file - where ```appclip.me``` put your domain && where ip put your server ip
3. Specify ```web_example/.well-known/apple-app-site-association``` file and put your bundle id
4. Install ```nodeJS``` and ```nginx```
5. Put ```app_clip.service``` into ```/etc/systemd/system``` folder
6. Put ```nginx.conf``` into ```/etc/nginx/``` folder
7. Run ```systemctl daemon-reload; systemctl start app_clip; systemctl reload nginx;```
