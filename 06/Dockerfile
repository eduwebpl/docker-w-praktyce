FROM jrecord/nettools as fetched-data

RUN cd /; wget -O mydata.json https://reqres.in/api/users?page=2

FROM alpine

COPY --from=fetched-data /mydata.json /mydata.json 

CMD sh -c "while true; do sleep 3600; done"

# COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
# https://reqres.in/api/users?page=2
# RUN npm install --save typescript 