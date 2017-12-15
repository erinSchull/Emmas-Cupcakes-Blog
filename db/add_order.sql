INSERT INTO orders(
    status, 
    quantity, 
    cake, 
    frosting, 
    filling, 
    topping, 
    total
)
VALUES(
    'submitted', 
    $1, 
    $2, 
    $3, 
    $4, 
    $5, 
    $6
);