#!/bin/sh
cd /home/Jevon/mern/
git pull
gsutil -m cp -r /home/Jevon/mern/ gs://mern
