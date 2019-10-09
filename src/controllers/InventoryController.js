const express = require('express');
const inventoryController = express.Router();
const globalFunction = require('../domain/sessionmanager/GlobalFunction');

const Food = require('../domain/beans/Food');
const CarePackage = require('../domain/beans/CarePackage');
const foodSubscribe = require('../domain/subscribe/FoodSubscribe');
const carePackageSubscribe = require('../domain/subscribe/CarePackageSubscribe');
const sessionManager = require('../domain/sessionmanager/SessionManager');
const carePackageRepository = require('../repositories/CarePackageRepository');
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

inventoryController.route('/editFood')
    .post((request, response) => {
        let data = response.body;
        if(data !== undefined){
            let temp = new Food(data.name,data.description,data.type,data.imageurl,data.quantity);
            foodRepository.editFood(temp);
        }
    });

inventoryController.route('/subscribeToFood/:food')
    .post((request,response) => {
        let food = request.params.food;
        let userObj = sessionManager.getSession(request.cookies.sessionId);
        foodRepository.getFoodItem(food)
            .then((foodObj) => {
                foodSubscribe.subscribe(userObj, foodObj);
                response.json({success: "Food has been added"});
            });
    }).delete((request, response) => {
        let food = request.params.food;
        let userObj = sessionManager.getSession(request.cookies.sessionId);
        foodRepository.getFoodItem(food)
            .then((foodObj) => {
                foodSubscribe.unsubscribe(userObj, foodObj);
                response.json({success: "Food has been deleted"});
            });
    });

inventoryController.route('/subscribeToCarePackage/:carepackage')
    .post((request, response) => {
        let carepackage = request.params.carepackage;
        let userObj = sessionManager.getSession(request.cookies.sessionId);
        carePackageRepository.getCarePackage(carepackage)
            .then((carePackageObj) => {
                carePackageSubscribe.subscribe(userObj,carePackageObj);
                response.json({success: "carepackage subscription added"})
            });
    }).delete((request,response) => {
        let carepackage = request.params.carepackage;
        let userObj = sessionManager.getSession(request.cookies.sessionId);
        carePackageRepository.getCarePackage(carepackage)
            .then((carePackageObj) => {
                carePackageSubscribe.unsubscribe(userObj,carePackageObj);
                response.json({success: "care package subscription removed"})
            });
    });

inventoryController.route('/getFoodItems')
    .get((request,response) => {
        //TODO: DO THIS
    });

inventoryController.route('/registerCarePackage')
    .post((request, response) => {
        let data = response.body;
        if(data !== undefined){
            let temp = new CarePackage(data.name,data.description,data.type,data.items,data.members)
            carePackageRepository.addCarePackage(temp);
        }
    });

inventoryController.route('/editCarePackage')
    .post((request, response) => {
        let data = response.body;
        if(data !== undefined){
            let temp = new CarePackage(data.name,data.description,data.type,data.items,data.members)
            carePackageRepository.editCarePackage(temp);
        }
    });

inventoryController.route('/getCarePackages')
    .get((request,response) => {
        //TODO: DO THIS
    });

inventoryController.route('/subscribetocarepackage/:carepackage')
    .post((request,response) => {
       let package = request.params.carepackage;
       carePackageRepository.getCarePackage(package);
    });


module.exports = inventoryController;
