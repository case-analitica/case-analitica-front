FROM node as node
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i npm@latest -g
RUN npm install @angular/cli@16.2.12 --silent
COPY . .
RUN npm run build --prod

FROM nginx
COPY --from=node /app/dist/case-analitica-front /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
