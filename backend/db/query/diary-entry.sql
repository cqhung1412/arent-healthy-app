-- name: GetDiaryEntriesByUserID :many
SELECT
  id,
  entry,
  created_at
FROM diary_entries
WHERE user_id = $1
ORDER BY created_at DESC;