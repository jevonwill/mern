#!/bin/sh
cd /home/Jevon/mern/
git pull
gsutil cp -r /home/Jevon/mern/ gs://bootstrap_jenkins
