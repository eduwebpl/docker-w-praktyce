

FROM node:14.17.0-slim

# set this with shell variables at build-time.
# If they aren't set, then not-set will be default.
ARG CREATED_DATE=not-set
ARG SOURCE_COMMIT=not-set

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

# www.google.com.
# labels from https://github.com/opencontainers/image-spec/blob/master/annotations.md
LABEL org.opencontainers.image.authors=author@domain
LABEL org.opencontainers.image.created=$CREATED_DATE
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT
LABEL org.opencontainers.image.title="My super NodeJS project"
LABEL org.opencontainers.image.url=https://bitbucket.org/myorg/myname/src/master/docker/prod/Dockerfile
LABEL org.opencontainers.image.source=https://bitbucket.org/myorg/myname/src/master
LABEL org.opencontainers.image.licenses=MIT
LABEL com.myorg.packageversion="5.4.1"

# install dependencies for additional modules and app to work
RUN apt-get update &&\
apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget \
lsof screen nano sudo ca-certificates expect iproute2 libgbm1

# Add container related bash scripts 
ADD ./docker/scripts /scripts

# Create user and group for running puppeteer
RUN groupadd -r nonrootuser && useradd -r -g nonrootuser \
    && mkdir -p /home/nonrootuser/.ssh \
    && chown -R nonrootuser:nonrootuser /home/nonrootuser \
    && chown -R nonrootuser:nonrootuser /scripts \
    && chmod a+x /scripts/* 

ADD . /home/nonrootuser/src


# update permissions for ssh keys for it to be readable
RUN cp -R /home/nonrootuser/src/ssh/* /home/nonrootuser/.ssh/ \
    && rm -Rf /home/nonrootuser/src/ssh \
    && chown -R nonrootuser:nonrootuser /home/nonrootuser/.ssh

# make sure nonrootuser is the owner of the app
RUN chown -R nonrootuser:nonrootuser /home/nonrootuser/src
RUN chown -R nonrootuser:nonrootuser /usr/local/

USER nonrootuser
WORKDIR /home/nonrootuser/src

RUN npm ci --ignore-scripts

# Remove ssh keys after pulling the private package as those are no longer needed
RUN rm -rf ~/.ssh/
