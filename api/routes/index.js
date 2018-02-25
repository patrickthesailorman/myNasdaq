var express = require('express');
var router = express.Router();

var ctrlCompanies = require('../controllers/companies.controllers.js'); 

// Company Routes
router
    .route('/companies')
    .get(ctrlCompanies.companiesGetAll)
    .post(ctrlCompanies.companiesAddOne);
 
 router
    .route('/companies/:companyId')
    .get(ctrlCompanies.companiesGetOne)
    .put(ctrlCompanies.companiesUpdateOne)
    .delete(ctrlCompanies.companiesDeleteOne);

    
module.exports = router;