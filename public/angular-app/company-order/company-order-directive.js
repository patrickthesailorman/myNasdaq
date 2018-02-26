angular.module('myNasdaq').component('companyOrder', {
  bindings: {
    shares: '='
  },
  template: '<span ng-repeat="orders in vm.orders track by $index">{{ order }}</span>',
  controller: 'CompanyController',
  controllerAs: 'vm'
});