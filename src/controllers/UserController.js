var express = require('express');
var userController = express.Router();

const sessionManager = require('../domain/sessionmanager/SessionManager');
const userRepository = require('../repositories/UserRepository');
const User = require('../domain/beans/User');

userController.route('/')
    .get((request,response, next) => {
        response.send("Hello World");
    });


userController.route('/login')
    .post((request, response) => {
        userRepository.getUser(request.body.username)
            .then((elem) =>{
                let session = sessionManager.newSession(elem);
                response.cookie('sessionId',session.sessionId);
                response.send(sessionManager.sessions);
        });
    });

userController.route('/createProfile')
    .post((request, response) => {
        let tempUser = new User(request.body.username,request.body.usertype,request.body.password,request.body.phone,request.body.address,request.body.email,request.body.subscriptions,request.body.familyinfo);
        userRepository.createUser(tempUser);
    });

userController.route('/updateProfile')
    .post((request, response) => {
        let tempUser = new User(request.body.username,request.body.usertype,request.body.password,request.body.phone,request.body.address,request.body.email,request.body.subscriptions,request.body.familyinfo);
        userRepository.updateUser(tempUser);
    });

module.exports = userController;

