var mongoose = require('mongoose');
var dburl = 'mongodb://' + process.env.IP + ':27017/myNasdaq';

mongoose.connect(dburl);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err) {
    console.log('Monggose connection error: ' + err);
});
