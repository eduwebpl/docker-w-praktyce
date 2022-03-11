FROM node:17-alpine

ARG CREATED_DATE=not-set
ARG SOURCE_COMMIT=not-set

EXPOSE 8080

# labels from https://github.com/opencontainers/image-spec/blob/master/annotations.md
LABEL org.opencontainers.image.authors=wopolow@gmail.com
LABEL org.opencontainers.image.created=$CREATED_DATE
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT
LABEL org.opencontainers.image.title="My super NodeJS project - Eduweb"
LABEL org.opencontainers.image.url=https://github.com/eduwebpl/docker-w-praktyce/blob/16/16/Dockerfile
LABEL org.opencontainers.image.source=https://bitbucket.org/eduwebpl/docker-w-praktyce/src/16
LABEL org.opencontainers.image.licenses=MIT
LABEL com.myorg.packageversion="0.0.1"

ADD . /app

RUN cd /app && npm ci --ignore-scripts

CMD node /app/src/index.js