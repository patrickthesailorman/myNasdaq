angular.module('myNasdaq').factory('companyDataFactory', companyDataFactory);

function companyDataFactory($http) {
  return {
    companyList: companyList,
    companyDisplay: companyDisplay,
    symbolDisplay: symbolDisplay,
    stockHistory: stockHistory
  };

  function companyList() {
    return $http.get('/api/companies').then(complete).catch(failed);
  }

  function companyDisplay(id) {
    return $http.get('/api/companies/' + id).then(complete).catch(failed);
  }

  function symbolDisplay(symbol) {
    return $http.get('/api/companies/symbol/' + symbol).then(complete).catch(failed);
  }
 
  function stockHistory(symbol) {
    return $http.post('/api/users/queries/' + symbol).then(complete).catch(failed);
  }

  function postUserQuery(user, symbol){
        return $http.post('api/users/' + user + '/queries', symbol).then(complete).catch(failed);
    }
    
  function complete(response) {
    return response;
  }

  function failed(error) {
    console.log(error.statusText);
  }

}