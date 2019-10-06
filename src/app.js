var express = require('express');
var app = express();

var userController = require('./controllers/UserController');


app.use('/user', userController);


app.listen(3000);





module.exports = app;


