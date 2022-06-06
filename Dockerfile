FROM node:14-slim
RUN mkdir home/rethink-server
WORKDIR /home/rethink-server
COPY . .
RUN npm ci
RUN npm run postinstall
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.2/dumb-init_1.2.2_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init
EXPOSE 8080
CMD ["dumb-init", "node", "dist/server.js"]