const express = require('express');
const router = express.Router();
const dbConnection = require('../db');

//Get all employess from database
router.get('/', (req, res) => {
    dbConnection.query('SELECT * FROM Employees', (error, rows) => {
        if(error){
            console.log(error);
        }
        else{
            res.json(rows);
        }
    });
});

//Get single employee by ID
router.get('/:id', (req, res) => {
    let id = req.params.id;
    //Preventing sql injection by using ?
    dbConnection.query('SELECT * FROM Employees WHERE Id = ?', [id], (error, rows) => {
        if(error){
            console.log(error);
        }
        else{
            res.json(rows);
        }
    });
});

//Insert a new record in the database
router.post('/', (req, res) => {
    //Getting the parameters from the body to insert a new record
    let { id, name, salary} = req.body;
    dbConnection.query('INSERT INTO Employees (id, name, salary) VALUES (?, ?, ?)', [id, name, salary], (error, rows) => {
        if(error){
            console.log(error);
        }
        else{
            res.json(
                {Status: 'Record has been added'}
            );
        }
    });
});

//Update existing record
router.put('/:id', (req,res) => {
    let { name, salary } = req.body;
    let id = req.params.id;
    dbConnection.query('UPDATE Employees SET name = ?, salary = ? WHERE id = ?', [name, salary, id], (error, rows) => {
        if(error){
            console.log(error);
        }
        else{
            res.json(
                {Status: 'Record has been updated'}
            );
        }
    });    
});

//Delete a record from the database
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    dbConnection.query('DELETE FROM Employees WHERE id = ?', [id], (error, rows) => {
        if(error){
            console.log(error);
        }
        else{
            res.json(
                {Status: 'Employee has been deleted'}
            );
        }
    });
});


module.exports = router;