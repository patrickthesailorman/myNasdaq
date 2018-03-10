var mongoose = require('mongoose');
var User = mongoose.model('User');


// GET all queries for a user
module.exports.queriesGetAll = function(req, res) {
  var id = req.params.queryId;
  console.log('GET queries', id);

  User
    .findById(id)
    .select('queries')
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : []
      };
      if (err) {
        console.log("Error finding query");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("Query id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "Query ID not found " + id
        };
      } else {
        response.message = doc.queries ? doc.queries : [];
      }
      res
        .status(response.status)
        .json(response.message);
    });
};

// GET single query for a user
module.exports.queriesGetOne = function(req, res) {
  var userId = req.params.userId;
  var queryId = req.params.queryId;
  console.log('GET queryId ' + queryId + ' for userId ' + userId);

  User
    .findById(userId)
    .select('queries')
    .exec(function(err, user) {
      var response = {
        status : 200,
        message : {}
      };
      if (err) {
        console.log("Error finding user");
        response.status = 500;
        response.message = err;
      } else if(!user) {
        console.log("User id not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "User ID not found " + id
        };
      } else {
        // Get the query
        response.message = user.queries.id(queryId);
        // If the query doesn't exist Mongoose returns null
        if (!response.message) {
          response.status = 404;
          response.message = {
            "message" : "query ID not found " + queryId
          };
        }
      }
      res
        .status(response.status)
        .json(response.message);
    });

};

var _addQuery = function (req, res, user) {
  user.queries.push({
    name : req.body.name,
    rating : parseInt(req.body.rating, 10),
    query: req.body.query
  });

  user.save(function(err, userUpdated) {
    if (err) {
      res
        .status(500)
        .json(err);
    } else {
      res
        .status(200)
        .json(userUpdated.queries[userUpdated.queries.length - 1]);
    }
  });

};

module.exports.queriesAddOne = function(req, res) {

  var id = req.params.userId;

  console.log('POST query to userId', id);

  User
    .findById(id)
    .select('queries')
    .exec(function(err, doc) {
      var response = {
        status : 200,
        message : doc
      };
      if (err) {
        console.log("Error finding user");
        response.status = 500;
        response.message = err;
      } else if(!doc) {
        console.log("UserId not found in database", id);
        response.status = 404;
        response.message = {
          "message" : "User ID not found " + id
        };
      }
      if (doc) {
        _addQuery(req, res, doc);
      } else {
        res
          .status(response.status)
          .json(response.message);
      }
    });


};

