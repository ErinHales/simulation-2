CREATE TABLE Houses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    address VARCHAR(80),
    city VARCHAR(40), 
    state VARCHAR(40),
    zipcode INTEGER,
    desired_mortgage FLOAT;
    desired_rent FLOAT;
);

-- ALTER TABLE Houses ADD desired_rent FLOAT;