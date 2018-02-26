angular.module('myNasdaq').controller('CompanyController', CompanyController);

function CompanyController($route, $routeParams, companyDataFactory) {
  var vm = this;
  var id = $routeParams.id;
  vm.isSubmitted = false;
  companyDataFactory.companyDisplay(id).then(function(response) {
    vm.company = response.data;
    // vm.symbol = _getSymbol(response.data.symbol);
  });

//   function _getSymbol(symbol) {
//     return new Array(symbol);
//   }

//   vm.addOrder = function() {
//     var postData = {
//       shares: vm.shares,
//       price: vm.price,
//       orderType: vm.orderType
//     };
//     if (vm.orderForm.$valid) {
//       companyDataFactory.postOrder(id, postData).then(function(response) {
//         if (response.status === 200) {
//           $route.reload();
//         }
//       }).catch(function(error) {
//         console.log(error);
//       });
//     } else {
//       vm.isSubmitted = true;
//     }
//   };

// }