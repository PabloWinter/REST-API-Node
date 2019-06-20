const express = require('express');
const router = express.Router();
const dbConnection = require('../db');

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



module.exports = router;