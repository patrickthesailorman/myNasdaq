var mongoose = require('mongoose');
var Search = mongoose.model('Search');

module.exports.getSearch = function(req, res) {
 Search
 .find()
 .exec(function(err, searches) {
     console.log("THESE SEARCHES...", searches);
     console.log("ERROR!",err);
 })
};

module.exports.addSearch = function(req, res) {
  var symbol = req.params.symbol;
  console.log("Add Search", symbol );
  Search.create({
      symbol: symbol
  }, function(err, symbol) {
      if (err) {
          console.log(err);
          res.status(400).json(err);
      } else {
          console.log("Search created");
          res.status(201).json(Search);
      }
  })
};