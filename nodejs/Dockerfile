FROM node:argon

MAINTAINER Alexey Kolyada <alexindacomp@gmail.com>

# Create app directory
RUN mkdir -p /var/www/app
WORKDIR /var/www/app

# Install libraries
RUN apt-get update && apt-get install -y \
	curl \
	python \
	make \
	g++ \
	gnupg \
	nano

# Install app dependencies
COPY ./src /var/www/app
RUN cd /var/www/app
RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
