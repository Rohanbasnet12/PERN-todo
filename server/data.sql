CREATE DATABASE ToDo;

CREATE TABLE todos ( 
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(254) NOT NULL UNIQUE,
    title VARCHAR(100) NOT NULL,
    progress INT CHECK (progress >= 0 AND progress <= 100),
    date DATE
);


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    hashed_password VARCHAR(300)    
);