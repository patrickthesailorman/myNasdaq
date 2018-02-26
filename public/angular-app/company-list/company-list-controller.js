angular.module('myNasdaq').controller('CompaniesController', CompaniesController);

function CompaniesController(companyDataFactory) {
  var vm = this;
  vm.title = 'myNASDAQ App';
  companyDataFactory.companyList().then(function(response) {
    // console.log(response);
    vm.companies = response.data;
  });
}
