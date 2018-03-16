angular.module('myNasdaq').controller('symbolSearchController', symbolSearchController);

function symbolSearchController($http, $route, $routeParams, $location, companyDataFactory) {
    var vm = this;
    
    companyDataFactory.getSearches().then(function(res){
        
          console.log("display searches", res); 
          vm.searches = res.data;
    });
    
    vm.stocksGetOne = function() {
        console.log("vm", vm);
        var symbol = vm.symbol.toUpperCase();
        companyDataFactory.symbolDisplay(symbol).then(function(res) {
            console.log("Response", res.data);
            var display = res.data;
            $location.path("/company/" + display._id);
        })
        console.log(symbol, vm.symbol);
       companyDataFactory.postSearch(symbol).then(function(res) {
           console.log("This response!!!", res);
       });
    }
    vm.queriesGetAll = function() {
        console.log("query");
    }
    vm.search = function() {
        console.log("History");
        companyDataFacotry.companySymbolDisplay().then(function(res) {
            console.log("show me");
        })
        
    }
    vm.getSearches = function() {
        console.log("Getting Searches");
        companyDataFactory.getSearches().then(function(res){
          console.log("show searches", res); 
        });
    }
};

    
