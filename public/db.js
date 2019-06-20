const mysql = require('mysql');

//Local database credentials
const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'artuser',
    password: 'KcVRyLhMleZrys7k',
    database: 'Human_Resources'
});

//Connect to databse
dbConnection.connect(function (error) {
    if(error){
        console.log(error);
    }
    else{
        console.log('Connection successfully');
    }
});


module.exports = dbConnection;