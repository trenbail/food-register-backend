const express = require('express');
const orderController = express.Router();

const Order = require('../domain/beans/Order');

const globalFunction = require('../domain/sessionmanager/GlobalFunction');
const sessionManager = require('../domain/sessionmanager/SessionManager');
const orderRepository = require('../repositories/OrderRepository');
const orderHandler = require('../domain/orderhandler/OrderHandler');
const carePackageRepository = require('../repositories/CarePackageRepository');


orderController.all('*', globalFunction.verifySession);

orderController.route('/requestOrder')
    .post((request,response) => {
        let data = request.body;
        let userObj = sessionManager.getSession(request.cookies.sessionId);
        if(data !== undefined){
            orderRepository.getHighestOrderNo().then((highestOrder)=> {
                let tempOrder = new Order(highestOrder+1,userObj.userName,data.items,"open",null,null);
                orderRepository.createOrder(tempOrder);
                response.status(200).json({success: "Order Submitted"});
            });
        }
    });

orderController.route('/fulfillOrder/:orderid')
    .post((request, response) => {
        let userObj = sessionManager.getSession(request.cookies.sessionId);
        let orderId = request.params.orderid;
        if(orderId){
            orderRepository.getOrder(orderId)
                .then((orderObj) => {
                    orderHandler.fulfillOrder(userObj,orderObj);
                });
            response.json({success: "Order Has been fufilled"});
        }
    });

orderController.route('/getOpenOrders')
    .get((request,response) => {
        orderRepository.getOpenOrders().then((openOrders) => {
            response.status(200).json(openOrders);
        })
    });









module.exports = orderController;
