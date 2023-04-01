-- name: GetMealsByUserID :many
SELECT 
  id,
  datestamp,
  type,
  image_path
FROM meals
WHERE user_id = $1
ORDER BY datestamp DESC;
