SELECT *
FROM orders
INNER JOIN users
ON orders.usersid = users.userid;
-- for admin view