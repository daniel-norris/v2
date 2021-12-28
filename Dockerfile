FROM node:14.18.2

WORKDIR /app

RUN useradd developer && \
    mkdir /home/developer && \
    chown -R developer:developer /app && \
    su developer

USER developer

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "start" ]