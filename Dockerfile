# Etapa 1 - Build do Angular
FROM node:18-alpine as build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build -- --configuration production

# Etapa 2 - Servindo com NGINX
FROM nginx:alpine

# Remove a configuração padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos compilados do Angular
COPY --from=build /app/dist/farmatechers /usr/share/nginx/html

# Copia a configuração personalizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
