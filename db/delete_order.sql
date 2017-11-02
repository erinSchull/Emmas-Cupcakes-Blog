DELETE FROM orders
WHERE orderid = $1;

SELECT * FROM orders;