var express = require('express');
var router = express.Router();

var ctrlCompanies = require('./contollers/companies.controllers.js'); 

router
    .route('/companies')
    .get(ctrlCompanies.companiesGetAll);
        

    
module.exports = router;