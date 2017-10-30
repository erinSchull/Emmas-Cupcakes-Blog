SELECT *
FROM users
INNER JOIN orders
ON users.userid = orders.usersid;