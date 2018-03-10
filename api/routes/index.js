var express = require('express');
var router = express.Router();

var ctrlCompanies = require('../controllers/companies.controllers.js'); 
var ctrlUsers = require('../controllers/users.controllers.js');

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

// Authentication
router
  .route('/users/register')
  .post(ctrlUsers.register);

router
    .route('/users/login')
    .post(ctrlUsers.login);
// Symbol search
router
  .route('/companies/symbol/:symbol')
  .get(ctrlCompanies.companiesGetOneSymbol);
  
// Query List
router
  .route('/queries')
  .get(ctrlCompanies.queriesGetAll)
  .post(ctrlCompanies.queriesAddOne);
  
module.exports = router;