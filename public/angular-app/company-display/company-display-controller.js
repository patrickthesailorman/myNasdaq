angular.module('myNasdaq').controller('CompanyController', CompanyController);

function CompanyController($route, $routeParams, $window, companyDataFactory, AuthFactory, jwtHelper) {
  var vm = this;
  var id = $routeParams.id;
  var smbol = $routeParams.symbol
  console.log("companyController ID", smbol)
  vm.isSubmitted = false;
  companyDataFactory.companyDisplay(id).then(function(response) {
    console.log(id);
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