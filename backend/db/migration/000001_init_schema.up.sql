CREATE TABLE "users" (
  "id" bigserial PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "meals" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint,
  "datestamp" date NOT NULL DEFAULT (CURRENT_DATE),
  "type" varchar NOT NULL,
  "image_path" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "body_compositions" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint,
  "monthstamp" date NOT NULL DEFAULT (CURRENT_DATE),
  "weight" int NOT NULL,
  "body_fat" int NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "excercises" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint,
  "name" varchar NOT NULL,
  "kcal" int NOT NULL,
  "minutes" int NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "diary_entries" (
  "id" bigserial PRIMARY KEY,
  "user_id" bigint,
  "entry" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE INDEX ON "meals" ("user_id");

CREATE INDEX ON "meals" ("user_id", "datestamp");

CREATE INDEX ON "body_compositions" ("user_id");

CREATE INDEX ON "excercises" ("user_id");

CREATE INDEX ON "diary_entries" ("user_id");

ALTER TABLE "meals" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "body_compositions" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "excercises" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "diary_entries" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
