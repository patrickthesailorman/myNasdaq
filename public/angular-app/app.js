angular.module('myNasdaq', ['ngRoute'])
.config(config)
.controller('CompaniesControllers', CompaniesController);

function config($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'angular-app/companies.html',
        controller: CompaniesController,
        controllerAs: 'vm'
    });
}

function CompaniesController() {
    var vm = this;
    vm.title = 'MyNASDAQ';
}