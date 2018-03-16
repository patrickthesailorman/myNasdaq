angular.module('myNasdaq').factory('companyDataFactory', companyDataFactory);

function companyDataFactory($http) {
  return {
    companyList: companyList,
    companyDisplay: companyDisplay,
    symbolDisplay: symbolDisplay,
    postSearch: postSearch,
    getSearches: getSearches
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
 
  function postSearch(symbol) {
    return $http.post('/api/search/' + symbol).then(complete).catch(failed);
  }
  
  function getSearches() {
    return $http.get('/api/search').then(complete).catch(failed);
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