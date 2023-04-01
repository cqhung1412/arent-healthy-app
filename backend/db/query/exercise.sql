-- name: GetExercisesByUserID :many
SELECT
  id,
  name,
  kcal,
  minutes
FROM excercises
WHERE user_id = $1
ORDER BY created_at DESC;