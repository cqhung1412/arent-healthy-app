// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.16.0
// source: user.sql

package db

import (
	"context"
)

const getUserByEmail = `-- name: GetUserByEmail :one
SELECT 
  id,
  email,
  password
FROM users
WHERE email = $1
LIMIT 1
`

type GetUserByEmailRow struct {
	ID       int64  `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (q *Queries) GetUserByEmail(ctx context.Context, email string) (GetUserByEmailRow, error) {
	row := q.db.QueryRowContext(ctx, getUserByEmail, email)
	var i GetUserByEmailRow
	err := row.Scan(&i.ID, &i.Email, &i.Password)
	return i, err
}

const getUserByID = `-- name: GetUserByID :one
SELECT 
  id,
  email,
  password
FROM users 
WHERE id = $1 
LIMIT 1
`

type GetUserByIDRow struct {
	ID       int64  `json:"id"`
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (q *Queries) GetUserByID(ctx context.Context, id int64) (GetUserByIDRow, error) {
	row := q.db.QueryRowContext(ctx, getUserByID, id)
	var i GetUserByIDRow
	err := row.Scan(&i.ID, &i.Email, &i.Password)
	return i, err
}
