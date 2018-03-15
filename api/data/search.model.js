var mongoose = require('mongoose');
var searchSchema = new mongoose.Schema({
  // name : {
  //   type : String,
  //   required : true
  // },
  symbol : {
    type : String,
    required : true
  },
  createdOn : {
    type : Date,
    "default" : Date.now
  }
});

mongoose.model('Search', searchSchema);