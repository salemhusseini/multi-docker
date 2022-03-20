FROM node:16-alpine as builder
WORKDIR '/app'
COPY ./package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY . .
RUN ng build

FROM nginx
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
COPY --from=builder /app/dist /usr/share/nginx/html