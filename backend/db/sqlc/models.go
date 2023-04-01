// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0

package db

import (
	"database/sql"
	"time"
)

type BodyComposition struct {
	ID         int64         `json:"id"`
	UserID     sql.NullInt64 `json:"user_id"`
	Monthstamp time.Time     `json:"monthstamp"`
	Weight     int32         `json:"weight"`
	BodyFat    int32         `json:"body_fat"`
	CreatedAt  time.Time     `json:"created_at"`
}

type DiaryEntry struct {
	ID        int64         `json:"id"`
	UserID    sql.NullInt64 `json:"user_id"`
	Entry     string        `json:"entry"`
	CreatedAt time.Time     `json:"created_at"`
}

type Excercise struct {
	ID        int64         `json:"id"`
	UserID    sql.NullInt64 `json:"user_id"`
	Name      string        `json:"name"`
	Kcal      int32         `json:"kcal"`
	Minutes   int32         `json:"minutes"`
	CreatedAt time.Time     `json:"created_at"`
}

type Meal struct {
	ID        int64         `json:"id"`
	UserID    sql.NullInt64 `json:"user_id"`
	Datestamp time.Time     `json:"datestamp"`
	Type      string        `json:"type"`
	ImagePath string        `json:"image_path"`
	CreatedAt time.Time     `json:"created_at"`
}

type User struct {
	ID        int64     `json:"id"`
	Email     string    `json:"email"`
	Password  string    `json:"password"`
	CreatedAt time.Time `json:"created_at"`
}