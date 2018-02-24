var express = require('express');
var router = express.Router();

var ctrlCompanies = require('../controllers/companies.controllers.js'); 

router
    .route('/companies')
    .get(ctrlCompanies.companiesGetAll);
 
 router
    .route('/companies/:companyId')
    .get(ctrlCompanies.companiesGetOne);
    
router
    .route('/companies/new')
    .get(ctrlCompanies.companiesAddOne); 

    
module.exports = router;