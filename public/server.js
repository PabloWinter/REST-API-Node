const express = require('express');
const app = express();

//Set port
app.set('port', process.env.PORT || 8000);
app.use(express.json());

//Routes
app.use(require('./route/employees'));

//Server listening on port 8000
app.listen(app.get('port'), () => {
    console.log("Server listening on port", app.get('port'))
});

