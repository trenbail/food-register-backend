const express = require('express');
const inventoryController = express.Router();
const globalFunction = require('../domain/sessionmanager/GlobalFunction');

const Food = require('../domain/beans/Food');
const foodRepository = require('../repositories/FoodRepository');

inventoryController.all("*", globalFunction.verifySession);

inventoryController.route('/registerFood')
    .post((request, response) => {
        let data = response.body;
        if(data !== undefined){
            let temp = new Food(data.name,data.description,data.type,data.imageurl,data.quantity);
            foodRepository.addFood(temp);
        }
    });

inventoryController.route('/registerCarePackage')
    .post((request, response) => {

    });


module.exports = inventoryController;
