var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://' + process.env.IP + ':27017/myNasdaq'

var _connection = null;

var open = function() {
   MongoClient.connect(dburl, function(err, db) {
      if (err) {
          console.log("Db connection failed");
          return;
      } 
      _connection = db;
      console.log("DB connection open", db);
   });
};

var get = function() {
    return _connection;
};

module.exports = {
    open : open,
    get : get
};