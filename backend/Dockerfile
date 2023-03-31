# Build stage
FROM golang:alpine AS builder
WORKDIR /app
COPY . .
RUN go build -o main main.go
RUN apk add curl
RUN curl -L https://github.com/golang-migrate/migrate/releases/download/v4.14.1/migrate.linux-amd64.tar.gz | tar xvz

# Run stage
FROM alpine
WORKDIR /app
COPY --from=builder /app/main .
COPY --from=builder /app/migrate.linux-amd64 ./migrate
COPY app.env .
COPY start.sh .
COPY wait-for.sh .
# COPY db/migration ./migration

RUN chmod +x wait-for.sh
RUN chmod +x start.sh

# EXPOSE 80
CMD ["/app/main"]
ENTRYPOINT ["app/start.sh"]
