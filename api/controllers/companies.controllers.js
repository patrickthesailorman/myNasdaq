var companyData = require('../data/company-list.json');

module.exports.companiesGetAll = function(req, res) {
    console.log("GET the companies");
    res
    .status(200)
    .send(companyData);
};

module.exports.companiesGetOne= function(req, res) {
    var companyId = req.params.companyId;
    var thisCompany = companyData[companyId];
    console.log("GET the company ID", companyId);
    res
    .status(200)
    .send(thisCompany);
};