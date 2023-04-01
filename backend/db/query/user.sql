-- name: GetUserByID :one
SELECT 
  id,
  email,
  password
FROM users 
WHERE id = $1 
LIMIT 1;

-- name: GetUserByEmail :one
SELECT 
  id,
  email,
  password
FROM users
WHERE email = $1
LIMIT 1;