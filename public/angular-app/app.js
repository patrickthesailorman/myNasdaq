angular.module('myNasdaq', ['ngRoute']).config(config);

function config($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'angular-app/companies-list/companies.html',
        controller: CompaniesController,
        controllerAs: 'vm'
    })
    .when('/company/:id', {
        templateUrl: 'angular-app/company-display/company.html',
        controller: CompanyController,
        controllerAs: 'vm'
    });
}

// function CompaniesController() {
//     var vm = this;
//     vm.title = 'MyNASDAQ';
// }