var mongoose = require('mongoose');
var Company = mongoose.model ('Company');

module.exports.companiesGetAll = function(req, res) {
    
    console.log('GET the companies');
    console.log(req.query);
    
    var offset = 0;
    var count = 5;
    var maxCount = 50;
    
    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    
     if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    
    if (isNaN(offset) || isNaN(count)) {
        res
        .status(400)
        .json({
            "message" : "If supplied in querystring, count and offest must both be numbers"
        });
        return;
    }
    
    if (count > maxCount) {
        res
        .status(400)
        .json({
            "message" : "Count limit of " + maxCount + " exceeded."
        });
        return;
    }
    
    Company
        .find()
        .skip(offset)
        .limit(count)
        .exec(function(err, companies) {
            console.log(err);
            console.log(companies);
            if (err) {
                console.log("Error finding companies");
                res
                .status(500)
                .json(err);
            } else {
          console.log("Found Companies", companies.length);
          res
            .json(companies);
        }
    });
    
};

module.exports.companiesGetOne= function(req, res) {
    var id = req.params.companyId;

    console.log("GET the company ID", id);
    
Company
    .findById(id)
    .exec(function(err, doc) {
        var response = {
          status : 200,
          message : doc
      };
      if (err) {
          console.log("Error finding Company");
          response.status = 500;
          response.message = err;
      } else if(!doc) {
          console.log("CompanyId not found in database", id);
          response.status = 404;
          response.message = {
              "message" : "Company ID not found" + id
          };
      }
      res
      .status(response.status)
      .json(response.message);
    });
};

module.exports.companiesAddOne = function(req, res) {
    console.log("POST new company");
    
    Company
    .create({
        Symbol : req.body.Symbol,
        Name : req.body.Name,
        LastSale : req.body.LastSale,
        MarketCap : req.body.MarketCap,
        ADRTSO : req.body.ADRTSO,
        IPOyear : req.body.IPOyear,
        Sector : req.body.Sector,
        Industry : req.body.Industry,
        SummaryQuote : req.body.SummaryQuote,
        FIELD10 : req.body.FIELD10
    }, function(err, company) {
        if (err) {
            console.log("Error creating company");
            res
            .status(400)
            .json(err);
        } else {
            console.log("Company Created!", company);
            res
            .status(201)
            .json(company);
        }
    });
    };
   
module.exports.companiesUpdateOne = function(req, res) {
  var companyId = req.params.companyId;

  console.log('GET companyId', companyId);

  Company
    .findById(companyId)
    .select('-symbol -name')
    .exec(function(err, company) {
      if (err) {
        console.log("Error finding company");
        res
          .status(500)
          .json(err);
          return;
      } else if(!company) {
        console.log("CompanyId not found in database", companyId);
        res
          .status(404)
          .lson({
            "message" : "Company ID not found " + companyId
          });
          return;
      }

      company.Name = req.body.Name;
      company.Symbol = req.body.Symbol;
      company.LastSale = req.body.LastSale;
      company.MarketCap = req.body.MarketCap;
      company.ADRTSO = req.body.ADRTSO;
      company.IPOyear = req.body.IPOyear;
      company.Sector = req.body.Sector;
      company.Industry = req.body.Industry;
      company.SummaryQuote = req.body.SummaryQuote;
      company.FIELD10 = req.body.FIELD10;

      company
        .save(function(err, companyUpdated) {
          if(err) {
            res
              .status(500)
              .json(err);
          } else {
            res
              .status(204)
              .json();
          }
        });


    });

};


module.exports.companiesDeleteOne = function(req, res) {
  var companyId = req.params.companyId;

  Company
    .findByIdAndRemove(companyId)
    .exec(function(err, symbol) {
      if (err) {
        res
          .status(404)
          .json(err);
      } else {
        console.log("Company deleted, id:", companyId);
        res
          .status(204)
          .json();        
      }
    });
};