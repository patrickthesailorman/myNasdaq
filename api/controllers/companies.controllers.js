module.exports.companiesGetAll = function(req, res) {
    console.log("GET the json");
    res
    .status(200)
    .send({ "jsonData" : true });
};