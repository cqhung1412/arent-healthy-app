INSERT INTO "users" ("email", "password") 
VALUES ('cqhung1412@gmail.com', 'password');

INSERT INTO "meals" ("user_id", "datestamp", "type", "image_path")
VALUES 
(1, '2022-05-21', 'Morning', 'images/m01.png'),
(1, '2022-05-21', 'Lunch', 'images/l03.png'),
(1, '2022-05-21', 'Dinner', 'images/d01.png'),
(1, '2022-05-21', 'Snack', 'images/l01.png'),
(1, '2022-05-20', 'Morning', 'images/m01.png'),
(1, '2022-05-20', 'Lunch', 'images/l02.png'),
(1, '2022-05-20', 'Dinner', 'images/d02.png'),
(1, '2022-05-20', 'Snack', 'images/s01.png');

INSERT INTO "body_compositions" ("user_id", "monthstamp", "weight", "body_fat")
VALUES
(1, '2020-06-01', 16, 16),
(1, '2020-07-01', 14, 15),
(1, '2020-08-01', 15, 14),
(1, '2020-09-01', 12, 12),
(1, '2020-10-01', 13, 14),
(1, '2020-11-01', 14, 11),
(1, '2020-12-01', 12, 10),
(1, '2021-01-01', 10, 8),
(1, '2021-02-01', 9, 9),
(1, '2021-03-01', 9, 7),
(1, '2021-04-01', 8, 6),
(1, '2021-05-01', 6, 5);

INSERT INTO "excercises" ("user_id", "name", "kcal", "minutes", "created_at")
VALUES
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00'),
(1, '家事全般（立位・軽い)', 26, 10, '2021-05-21 08:00:00');

INSERT INTO "diary_entries" ("user_id", "entry", "created_at")
VALUES
(1, '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2021-05-21 23:25:00'),
(1, '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2021-05-21 23:25:00'),
(1, '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2021-05-21 23:25:00'),
(1, '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2021-05-21 23:25:00'),
(1, '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2021-05-21 23:25:00'),
(1, '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2021-05-21 23:25:00'),
(1, '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2021-05-21 23:25:00'),
(1, '私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…', '2021-05-21 23:25:00');