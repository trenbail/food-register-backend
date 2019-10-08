const express = require('express');
const inventoryController = express.Router();
const globalFunction = require('../domain/sessionmanager/GlobalFunction');

inventoryController.all("*", globalFunction.verifySession);
inventoryController.route('/registerFood')
    .post((request, response) => {

    });

inventoryController.route('/registerCarePackage')
    .post((request, response) => {

    });


module.exports = inventoryController;
