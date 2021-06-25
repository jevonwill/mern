#!/bin/sh
cd ~/mern
sudo git pull
#Copy git repo to /var/www/
if sudo mkdir /var/www/$1; then
	sudo cp -r ~/$1 /var/www/
else
	sudo mkdir /var/www/$1
	sudo cp -r ~//$1 /var/www/
fi
