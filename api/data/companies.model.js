var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
    "Symbol" : {
        type : String,
        required : true
    },
    "Name" : {
        type : String,
        required : true
    },
    "LastSale" : String,
    "MarketCap" : Number,
    "ADRTSO" : String,
    "IPOyear" : String,
    "Sector" : String,
    "Industry" : String,
    "SummaryQuote" : String,
    "FIELD10" : String
});

mongoose.model('Company', companySchema);