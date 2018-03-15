var mongoose = require('mongoose');

var querySchema = new mongoose.Schema({
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

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  queries : [querySchema]
});



mongoose.model('User', userSchema);