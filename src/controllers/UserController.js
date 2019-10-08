const express = require('express');
const userController = express.Router();

const globalFunction = require('../domain/sessionmanager/GlobalFunction');
const sessionManager = require('../domain/sessionmanager/SessionManager');
const userRepository = require('../repositories/UserRepository');
const User = require('../domain/beans/User');


userController.all("*", globalFunction.verifySession);

userController.route('/')
    .get((request,response, next) => {
        response.send("Hello World");
    });


userController.route('/login')
    .post((request, response) => {
        let data = request.body;
        //Handle if there was no username or password passed
        if(data.username !== undefined && data.password !== undefined) {
            //Get the user by username
            userRepository.getUser(data.username)
                .then((user) => {
                    //Make sure the users password matches their actual
                    if (user.authenticate(data.password)) {
                        //Create a new session
                        let session = sessionManager.newSession(user);
                        response.cookie('sessionId', session.sessionId , {httpOnly: true});
                        response.send(sessionManager.sessions);
                    } else {
                        response.json({error: "Username or password incorrect"});
                    }
                });
        } else {
            //They sent the request without a username or password in the body
            response.json({error: "Username or Password were empty"})
        }
    });

userController.route('/createProfile')
    .post((request, response) => {
        let data = request.body;
        //Check if the user exists
        userRepository.doesUserExist(data.username)
            .then((result) => {
                if(!result) {
                    let tempUser = new User(data.username, data.usertype, data.password, data.phone, data.address, data.email, data.subscriptions, data.family);
                    userRepository.createUser(tempUser);
                } else {
                        response.json({error: "User already exists!"});
                    }
            });
    });

userController.route('/updateProfile')
    .post((request, response) => {
        let tempUser = new User(request.body.username,request.body.usertype,request.body.password,request.body.phone,request.body.address,request.body.email,request.body.subscriptions,request.body.familyinfo);
        userRepository.updateUser(tempUser);
    });

module.exports = userController;

