UPDATE orders
SET status = $2
WHERE orderid = $1;

SELECT * 
FROM orders 