var express = require('express');
var app = express();

app.set('port', process.env.PORT);


var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
console.log('Magic happens on port: ' + port);
 });