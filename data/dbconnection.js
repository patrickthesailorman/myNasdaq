var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://' + process.env.IP + ':27017/myNasdaq'

var _connection = null;

var open = function() {
    // Set connection
};

var get = function() {
    return _connection;
};

module.exports = {
    open : open,
    get : get
};