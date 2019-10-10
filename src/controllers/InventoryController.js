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
const _ = require("underscore");

inventoryController.all("*", globalFunction.verifySession);

inventoryController.route('/registerFood')
    .post((request, response) => {
        let data = request.body;
        console.log(data);
        if(data !== undefined){
            let temp = new Food(data.name,data.description,data.type,data.imageurl,data.quantity);
            foodRepository.addFood(temp);
            response.status(200).json({success: "Food Added!"});
        }
    });

inventoryController.route('/editFood')
    .post((request, response) => {
        let data = request.body;
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

inventoryController.route('/getFoodInventory')
    .get((request,response) => {
        foodRepository.getFoodInventory().then((allFood) => {
            let keys = _.keys(allFood);
            for(let obj of keys){
                delete allFood[keys].members;
            }
            response.json(allFood);
        });
    });

inventoryController.route('/registerCarePackage')
    .post((request, response) => {
        let data = request.body;
        if(data !== undefined){
            let temp = new CarePackage(data.name,data.description,data.type,data.items,data.members);
            carePackageRepository.addCarePackage(temp);
            response.json({success: "care package added"});
        }
    });

inventoryController.route('/editCarePackage')
    .post((request, response) => {
        let data = request.body;
        if(data !== undefined){
            let temp = new CarePackage(data.name,data.description,data.type,data.items,data.members)
            carePackageRepository.editCarePackage(temp);
        }
    });

inventoryController.route('/getCarePackageInventory')
    .get((request,response) => {
        carePackageRepository.getCarePackageInventory().then((allCarePackage) => {
            let keys = _.keys(allCarePackage);
            for(let obj of keys){
                delete allCarePackage[keys].members;
            }
            response.json(allCarePackage);
        });
    });

inventoryController.route('/subscribetocarepackage/:carepackage')
    .post((request,response) => {
       let package = request.params.carepackage;
       carePackageRepository.getCarePackage(package);
    });


module.exports = inventoryController;
