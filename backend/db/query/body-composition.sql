-- name: GetCompositionByUserID :many
SELECT
  id,
  monthstamp,
  weight,
  body_fat
FROM body_compositions
WHERE user_id = $1
ORDER BY monthstamp DESC;