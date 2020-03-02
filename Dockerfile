FROM node:12.16.1

ENV CHROME_PACKAGE="google-chrome-stable_80.0.3987.122-1_amd64.deb"

RUN echo "deb http://ftp.debian.org/debian stable main" >> /etc/apt/sources.list && \
apt-get update && \
apt-get install -y xvfb wget sudo

RUN mkdir -p /usr/share/man/man1 && \
apt-get install -y -t stable openjdk-8-jre

RUN wget https://github.com/webnicer/chrome-downloads/raw/master/x64.deb/${CHROME_PACKAGE} && \
dpkg --unpack ${CHROME_PACKAGE} && \
apt-get install -f -y && \
apt-get clean && \
rm -rf /var/lib/apt/lists/*

RUN npm install -g protractor@5.4.1 && \
webdriver-manager update

WORKDIR /po-protractor-cucumber-js

COPY . .

RUN npm install

RUN npm run test