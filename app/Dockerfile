# pull the Node.js Docker image

FROM node:alpine

# create the directory inside the container

WORKDIR /usr/src/app

# copy the package.json files from the local machine to the workdir in container

COPY package*.json ./

# run npm install on our local machine

RUN npm install

# copy all the generated modules and all other files to the container

COPY . .

# expose to proper port for the application

EXPOSE 5000

# start the application

CMD ["node", "index.js"]
