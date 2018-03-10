angular.module('myNasdaq').controller('symbolSearchController', symbolSearchController);

function symbolSearchController($http, $route, $routeParams, $location, companyDataFactory) {
    var vm = this;
    
    vm.stocksGetOne = function() {
        console.log("vm", vm);
        var symbol = vm.symbol.toUpperCase();
        companyDataFactory.symbolDisplay(symbol).then(function(res) {
            var display = res.data;
            $location.path("/company/" + display._id);
        });
        console.log(symbol, vm.symbol);
      
    }
    vm.queriesGetAll = function() {
        console.log("query");
    }
};

    
