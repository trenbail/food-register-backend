const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const app = express();

const userController = require('./controllers/UserController');
const inventoryController = require('./controllers/InventoryController');

app.use(bodyparser.json());
app.use(cookieparser());
app.use('/user', userController);
app.use('/inventory', inventoryController);


app.listen(3000);





module.exports = app;


