CREATE DATABASE IF NOT EXISTS Human_Resources;
USE Human_Resources;

DROP TABLE IF EXISTS Employees;

CREATE TABLE Employees(
    Id INT(11) NOT NULL AUTO_INCREMENT,
    Name VARCHAR(50) DEFAULT NULL,
    Salary INT(11) DEFAULT NULL,
    PRIMARY KEY(Id)
);

INSERT INTO Employees VALUES
	(1, 'Ryan Murray', 3500),
    (2, 'Andrew Cole', 3000),
    (3, 'Pablo Winter', 3000),
    (4, 'Jeff Ray', 4500),
    (5, 'Ana Smith', 3500),
    (6, 'Kate Jonson', 3000);