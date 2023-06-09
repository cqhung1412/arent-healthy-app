postgres:
	docker run --name postgres_container --network health-network -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres:alpine

createdb:
	docker exec -it postgres_container createdb --username=root --owner=root simple_health

dropdb:
	docker exec -it postgres_container dropdb simple_health

stopdb: 
	docker stop postgres_container

rmdb:
	docker rm postgres_container

psql:
	docker exec -ti postgres_container psql -U root -d simple_health

migrateup:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/simple_health?sslmode=disable" -verbose up

migrateup1:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/simple_health?sslmode=disable" -verbose up 1

migratedown:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/simple_health?sslmode=disable" -verbose down

migratedown1:
	migrate -path db/migration -database "postgresql://root:secret@localhost:5432/simple_health?sslmode=disable" -verbose down 1

sqlc:
	sqlc generate

build:
	go build -v ./...

test:
	go test -v -cover ./...

server:
	go mod tidy && go run main.go

mock:
	mockgen -package mockdb -destination db/mock/store.go github.com/cqhung1412/arent-healthy-app/backend/db/sqlc Store

dockerbuild:
	docker build -t simple_health:latest .

dockerrun:
	docker run --name simplehealth --network health-network -p 8080:80 -e GIN_MODE=release simple_health

networkdocker:
	docker network create health-network

.PHONY: postgres createdb dropdb stopdb rmdb psql migrateup migratedown migrateup1 migratedown1 sqlc build test server mock dockerbuild dockerrun networkdocker