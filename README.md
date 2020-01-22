# nodepop

- url: http://ec2-3-136-161-198.us-east-2.compute.amazonaws.com/
- ip address: http://3.136.161.198/
- static image url: http://ec2-3-136-161-198.us-east-2.compute.amazonaws.com/images/img.jpg

In order to restart automatically It was set up with `pm2`:

1. `pm2 startup` 
2. `sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu`
3. `pm2 save` 
