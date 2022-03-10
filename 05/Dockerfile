FROM node

RUN mkdir src && \
  cd src && echo "hello" > test && \
  cat /src/test;

ADD index.html /index.html
ADD server.js /server.js

EXPOSE 8080

STOPSIGNAL 9