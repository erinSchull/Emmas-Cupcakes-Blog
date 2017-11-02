CREATE TABLE orders(
    orderid SERIAL PRIMARY KEY,
    status VARCHAR(100),
    usersid INT REFERENCES users(userid),
    quantity INT,
    cake VARCHAR(100),
    frosting VARCHAR(100),
    filling VARCHAR(100),
    topping VARCHAR(100),
    total INT 
)