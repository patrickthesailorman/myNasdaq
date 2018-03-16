angular.module('myNasdaq').controller('CompanySymbolController', CompanySymbolController);

function CompanySymbolController($route, $routeParams, $window, companyDataFactory, AuthFactory, jwtHelper) {
  var vm = this;
  var symbol = $routeParams.symbol
  console.log("companySymbolController symbol", symbol)
  vm.isSubmitted = false;
  companyDataFactory.companySymbolDisplay(symbol).then(function(response) {
    console.log(symbol);
    console.log(response.data);
    console.log(response);
    vm.company = response.data;

  });
  
  vm.isLoggedIn = function() {
    if (AuthFactory.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  };
  
}