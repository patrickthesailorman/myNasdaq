var companyData = require('../data/company-list.json');

module.exports.companiesGetAll = function(req, res) {
    console.log("GET the companies");
    res
    .status(200)
    .send(companyData);
};