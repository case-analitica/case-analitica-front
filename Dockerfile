# Estagio 1 - Responsável por gerar o build da nossa aplicação
FROM node as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install @angular/cli@16.2.11 --silent
COPY . .
RUN npm run build

# Estagio 2 - Responsável por expor nossa aplicação
FROM nginx
COPY --from=node /app/dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
