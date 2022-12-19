FROM node:lts-alpine
WORKDIR /app
RUN chown node:node /app
USER node
COPY --chown=node:node . .
RUN npm install && mkdir .npm-cache
USER root
RUN chgrp -R 0 /app && chmod -R g=u /app
USER node
CMD npm run serve
