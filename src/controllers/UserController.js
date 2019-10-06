var express = require('express');

var userRoutes = express.Router();




userRoutes.route('/')
    .get((request,response, next) => {
        response.send("Hello World");
    });




module.exports = userRoutes;

