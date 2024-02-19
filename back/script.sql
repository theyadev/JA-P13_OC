-- Create the database
CREATE DATABASE IF NOT EXISTS ycyw;

-- Use the database
USE ycyw;

-- Create the document table
CREATE TABLE document (
    id INT PRIMARY KEY AUTO_INCREMENT,
    visio_id INT,
    name VARCHAR(255),
    file VARCHAR(255),
    type VARCHAR(255),
    size INT,
    create_date TIMESTAMP
);

-- Create the visio table
CREATE TABLE visio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    start_date TIMESTAMP,
    end_date TIMESTAMP
);

-- Create the accounts_visio table
CREATE TABLE accounts_visio (
    visio_id INT,
    account_id INT
);

-- Create the currency table
CREATE TABLE currency (
    id INT PRIMARY KEY AUTO_INCREMENT,
    currency_iso VARCHAR(3)
);

-- Create the country table
CREATE TABLE country (
    id INT PRIMARY KEY AUTO_INCREMENT,
    currency_id INT,
    country_iso VARCHAR(2),
    name VARCHAR(255)
);

-- Create the chat table
CREATE TABLE chat (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT,
    create_date TIMESTAMP,
    update_date TIMESTAMP,
    active BOOLEAN,
    content TEXT
);

-- Create the accounts_chat table
CREATE TABLE accounts_chat (
    chat_id INT,
    account_id INT
);

-- Create the message table
CREATE TABLE message (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT,
    object VARCHAR(255),
    body TEXT
);

-- Create the accounts_message table
CREATE TABLE accounts_message (
    message_id INT,
    account_id INT
);

-- Create the account table
CREATE TABLE account (
    id INT PRIMARY KEY AUTO_INCREMENT,
    address_id INT,
    company_id INT,
    role_id INT,
    language_id INT,
    email VARCHAR(255),
    password VARCHAR(255),
    name VARCHAR(255),
    surname VARCHAR(255),
    phone VARCHAR(20),
    create_date TIMESTAMP,
    update_date TIMESTAMP,
    active BOOLEAN
);

-- Create the role table
CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255)
);

-- Create the address table
CREATE TABLE address (
    id INT PRIMARY KEY AUTO_INCREMENT,
    country_id INT,
    address VARCHAR(255),
    zip VARCHAR(20),
    city VARCHAR(255)
);

-- Create the language table
CREATE TABLE language (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(5),
    name VARCHAR(255)
);

-- Create the company table
CREATE TABLE company (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    address_id INT,
    email VARCHAR(255),
    phone VARCHAR(20),
    create_date TIMESTAMP,
    update_date TIMESTAMP,
    active BOOLEAN
);

-- Create the rental table
CREATE TABLE rental (
    id INT PRIMARY KEY AUTO_INCREMENT,
    account_id INT,
    car_id INT,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    paid_date TIMESTAMP,
    accepted_date TIMESTAMP,
    close_date TIMESTAMP,
    price DECIMAL(10,2),
    create_date TIMESTAMP
);

-- Create the car table
CREATE TABLE car (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_id INT,
    acriss_id INT,
    registration VARCHAR(20),
    make VARCHAR(255),
    model VARCHAR(255),
    kilometer INT,
    year INT,
    color VARCHAR(255),
    rental_price DECIMAL(10,2),
    create_date TIMESTAMP,
    available BOOLEAN
);

-- Create the acriss table
CREATE TABLE acriss (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(255),
    type VARCHAR(255),
    transmission VARCHAR(255),
    fuel VARCHAR(255),
    create_date TIMESTAMP
);

-- Add foreign key constraints
ALTER TABLE document ADD FOREIGN KEY (visio_id) REFERENCES visio(id);
ALTER TABLE accounts_visio ADD FOREIGN KEY (visio_id) REFERENCES visio(id);
ALTER TABLE accounts_visio ADD FOREIGN KEY (account_id) REFERENCES account(id);
ALTER TABLE country ADD FOREIGN KEY (currency_id) REFERENCES currency(id);
ALTER TABLE chat ADD FOREIGN KEY (account_id) REFERENCES account(id);
ALTER TABLE accounts_chat ADD FOREIGN KEY (chat_id) REFERENCES chat(id);
ALTER TABLE accounts_chat ADD FOREIGN KEY (account_id) REFERENCES account(id);
ALTER TABLE message ADD FOREIGN KEY (account_id) REFERENCES account(id);
ALTER TABLE accounts_message ADD FOREIGN KEY (message_id) REFERENCES message(id);
ALTER TABLE accounts_message ADD FOREIGN KEY (account_id) REFERENCES account(id);
ALTER TABLE account ADD FOREIGN KEY (address_id) REFERENCES address(id);
ALTER TABLE account ADD FOREIGN KEY (company_id) REFERENCES company(id);
ALTER TABLE account ADD FOREIGN KEY (role_id) REFERENCES role(id);
ALTER TABLE account ADD FOREIGN KEY (language_id) REFERENCES language(id);
ALTER TABLE company ADD FOREIGN KEY (address_id) REFERENCES address(id);
ALTER TABLE rental ADD FOREIGN KEY (account_id) REFERENCES account(id);
ALTER TABLE rental ADD FOREIGN KEY (car_id) REFERENCES car(id);
ALTER TABLE car ADD FOREIGN KEY (company_id) REFERENCES company(id);
ALTER TABLE car ADD FOREIGN KEY (acriss_id) REFERENCES acriss(id);
