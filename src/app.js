const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const app = express();

const userController = require('./controllers/UserController');
const inventoryController = require('./controllers/InventoryController');
const orderController = require('./controllers/OrderController');


app.use(bodyparser.json());
app.use(cookieparser());
app.use(cors());

app.use('/user', userController);
app.use('/inventory', inventoryController);
app.use('/orders', orderController);


app.listen(3000);





module.exports = app;


