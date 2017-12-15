SELECT *
FROM orders
INNER JOIN users
ON orders.usersid = users.userid;
--current user param above^^