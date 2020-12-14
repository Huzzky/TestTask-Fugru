FROM balticwebstudio/spa-builder as builder
COPY ./package.json ./yarn.lock /app/
RUN cd /app && yarn
COPY . /app
RUN cd /app && yarn build

FROM balticwebstudio/spa-server
COPY --from=builder /usr/local/bin/brotli /usr/local/bin
COPY --from=builder /app/build /etc/nginx/html/
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]