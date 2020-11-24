/* logico: */

CREATE TABLE User (
    password VARCHAR,
    id SMALLINT PRIMARY KEY,
    name VARCHAR,
    lastname VARCHAR,
    cpf VARCHAR,
    birthday DATE,
    description VARCHAR,
    avatar VARCHAR
);

CREATE TABLE Client (
    nickname VARCHAR,
    id SMALLINT PRIMARY KEY,
    name VARCHAR,
    lastname VARCHAR,
    cpf VARCHAR,
    birthday DATE,
    description VARCHAR,
    avatar VARCHAR
);

CREATE TABLE Product (
    id SMALLINT PRIMARY KEY,
    title VARCHAR,
    subtitle VARCHAR,
    description VARCHAR,
    Value FLOAT
);

CREATE TABLE Contact (
    email VARCHAR,
    instagram VARCHAR,
    facebook VARCHAR,
    phone VARCHAR
);

CREATE TABLE Job (
    fk_User_id SMALLINT,
    fk_Client_id SMALLINT,
    fk_Product_id SMALLINT,
    title VARCHAR,
    subtitle VARCHAR,
    sheduling DATE,
    delivery DATE,
    description VARCHAR
);
 
ALTER TABLE Job ADD CONSTRAINT FK_Job_1
    FOREIGN KEY (fk_User_id)
    REFERENCES User (id)
    ON DELETE NO ACTION;
 
ALTER TABLE Job ADD CONSTRAINT FK_Job_2
    FOREIGN KEY (fk_Client_id)
    REFERENCES Client (id)
    ON DELETE NO ACTION;
 
ALTER TABLE Job ADD CONSTRAINT FK_Job_3
    FOREIGN KEY (fk_Product_id)
    REFERENCES Product (id)
    ON DELETE NO ACTION;