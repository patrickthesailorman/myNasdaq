angular.module("angularTypeahead", ["ui.bootstrap"]);

module.factory("Symbols", function(){
    var Symbols = db.companies.find({Symbols : "req.body"});
    return Symbols;
});

module.controller("TypeaheadCtrl", function($scope, Symbols) {
	
	$scope.selected = undefined;
	
	$scope.symbols = Symbols;
	
});