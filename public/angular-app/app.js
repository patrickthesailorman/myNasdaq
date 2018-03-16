angular.module('myNasdaq', ['ngRoute', 'angular-jwt','angularUtils.directives.dirPagination']).config(config).run(run);

function config($httpProvider, $routeProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
    
    $routeProvider
    .when('/', {
        templateUrl: 'angular-app/main/main.html',
        controller: symbolSearchController,
        controllerAs: 'vm',
        access: {
            restricted: false
        }
    })
    .when('/companies', {
        templateUrl: 'angular-app/company-list/companies.html',
        controller: CompaniesController,
        controllerAs: 'vm',
        access: {
            restricted: false
        }
    })
    .when('/company/:id', {
        templateUrl: 'angular-app/company-display/company.html',
        controller: CompanyController,
        controllerAs: 'vm',
        access: {
            restricted: false
        }
    })
    .when('/company/symbol/:symbol', {
        templateUrl: 'angular-app/company-display/company.html',
        controller: CompanySymbolController,
        controllerAs: 'vm',
        access: {
            restricted: false
        }
    })
    .when('/register', {
        templateUrl: 'angular-app/register/register.html',
        controller: RegisterController,
        controllerAs: 'vm',
        access: {
            restricted: false
        }
    })
    .when('/profile', {
        templateUrl: 'angular-app/profile/profile.html',
        access: {
        restricted: true
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}

function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
}
