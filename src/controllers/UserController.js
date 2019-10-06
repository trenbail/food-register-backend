var express = require('express');

var userController = express.Router();

userController.route('/')
    .get((request,response, next) => {
        response.send("Hello World");
    });


userController.route('/login')
    .post((request, response) => {

    });

userController.route('/createProfile')
    .post((request, response) => {

    });

userController.route('updateProfile')
    .post((request, response) => {

    });

module.exports = userController;

