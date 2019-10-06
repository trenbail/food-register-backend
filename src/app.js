var express = require('express');
var app = express();

var userController = require('./controllers/UserController');
var inventoryController = require('./controllers/InventoryController');


app.use('/user', userController);
app.use('/inventory', inventoryController);


app.listen(3000);





module.exports = app;


