const express = require('express');
const inventoryController = express.Router();


inventoryController.route('/registerFood')
    .post((request, response) => {

    });

inventoryController.route('/registerCarePackage')
    .post((request, response) => {

    });


module.exports = inventoryController;
