angular.module("angularTypeahead", ["ui.bootstrap"]);

module.factory("Symbols", function(){
    var Symbols = db.find({Symbols : "req.body"});
    return Symbols;
});

module.controller("TypeaheadCtrl", function($scope, Symbol) {
	
	$scope.selected = undefined;
	
	$scope.symbol = company.Symbol;
	
});