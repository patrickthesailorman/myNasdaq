var mongoose = require('mongoose');
var dburl = 'mongodb://' + process.env.IP + ':27017/myNasdaq';
var retry = null;

mongoose.connect(dburl);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

mongoose.connection.on('error', function(err) {
    console.log('Monggose connection error: ' + err);
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
function gracefulShutdown(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
}

// For APP termination
process.on('SIGINT', function() {
    gracefulShutdown('App termination (SIGINT)', function() {
        process.exit(0);
    });
});

// For Heroku APP termination
process.on('SIGTERM', function() {
    gracefulShutdown('App termination (SIGTERM)', function() {
        process.exit(0);
    });
});

// For nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// BRING IN SCHEMAS AND MODELS
require('./companies.model.js');
require('./users.model');
require('./search.model');