var express = require('express');
var router = express.Router();

var ctrlCompanies = require('../contollers/companies.controllers.js'); 

router
    .route('/json')
    .get(function(req, res) {
        console.log("GET the json");
        res
        .status(200)
        .json( {"jsonData": true} );
    })
    .post(function(req, res) {
        console.log("POST the json route");
        res
        .status(200)
        .json( {"jsonData": "POST recieved" } );
    });
    
module.exports = router;