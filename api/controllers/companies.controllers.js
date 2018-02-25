var dbconn = require('../data/dbconnection.js');
var ObjectId = require('mongodb').ObjectId;
var companyData = require('../data/company-list.json');

module.exports.companiesGetAll = function(req, res) {
    
    var db = dbconn.get();
    var collection = db.collection('companies');
    
    var offset = 0;
    var count = 5;
    
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    
     if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    
    collection
      .find
      .skip(offset)
      .limit(count)
      .toArray(function(err, docs) {
        console.log("Found companies", docs);
        res
          .status(200)
          .json(docs); 
    });
    

    
    // console.log("db", db);
    
    // console.log("GET the companies");
    // console.log(req.query);
    

    
    // var returnData = companyData.slice(offset, offset + count);
    
    // res
    // .status(200)
    // .send(returnData);
};

module.exports.companiesGetOne= function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('companies');
    
    var companyId = req.params.companyId;
    console.log("GET the company ID", companyId);
    
    collection
      .findOne({
          _id : ObjectId(companyId)
      }, function(err, doc) {
         res
            .status(200)
            .json(doc);
      })
    
    
};

module.exports.companiesAddOne = function(req, res) {
    var db = dbconn.get();
    var collection = db.collection('companies');
    var newCompany;
    
    console.log("POST new company");
    
    if (req.body && req.body.name && req.body.symbol) {
        newCompany = req.body;
        
        collection.insertOne(newCompany, function(err, response) {
            console.log(response);
            console.log(response.ops);
            res
              .status(201)
              .json(response.ops);
        });
    } else {
        console.log("Data missing from body");
        res
        .status(400)
        .json({message : "Required data missing from boody"});
    }
    console.log(req.body);
    res
    .status(200)
    .json(req.body);
};