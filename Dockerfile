FROM node:14.18.2

WORKDIR /app

# added to fix a build error with mozjpeg
RUN apt-get update && apt-get install \
    nasm

RUN useradd developer && \
    mkdir /home/developer && \
    chown -R developer:developer /app /home/developer

USER developer

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start" ]