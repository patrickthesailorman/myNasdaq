var companyData = require('../data/company-list.json');

module.exports.companiesGetAll = function(req, res) {
    console.log("GET the companies");
    console.log(req.query);
    
    var offset = 0;
    var count = 5;
    
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    
     if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    
    var returnData = companyData.slice(offset, offset + count);
    
    res
    .status(200)
    .send(returnData);
};

module.exports.companiesGetOne= function(req, res) {
    var companyId = req.params.companyId;
    var thisCompany = companyData[companyId];
    console.log("GET the company ID", companyId);
    res
    .status(200)
    .send(thisCompany);
};