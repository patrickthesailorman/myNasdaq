angular.module('myNasdaq').controller('CompanySymbolController', CompanySymbolController);

function CompanySymbolController($route, $routeParams, $window, companyDataFactory, AuthFactory, jwtHelper) {
  var vm = this;
  var symbol = $routeParams.symbol
  
  console.log("companySymbolController symbol", symbol)
  vm.isSubmitted = false;
  companyDataFactory.companySymbolDisplay(symbol).then(function(res) {
    console.log(symbol);
    console.log(res.data);
    console.log(res);
    vm.company = res.data;

  });
  
  vm.isLoggedIn = function() {
    if (AuthFactory.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  };
  
}