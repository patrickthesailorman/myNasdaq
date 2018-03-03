angular.module('myNasdaq').controller('SearchController', SearchController);


// app.controller('symbolSearchCtrl',function($scope,$http){
//     $http.get('../api/data/company-list.json').success(function(data, status, headers, config) {
//         $scope.items = data.data;
//     }).error(function(data, status, headers, config) {
//         console.log("No data found..");
//   });
// });

// app.filter('searchFor', function(){
//     return function(arr, searchSymbols){
//         if(!searchSymbols){
//             return arr;
//         }
//         var result = [];
//         searchSymbols = searchSymbols.toUpperCase();
//         angular.forEach(arr, function(item){
//             if(item.title.toUpperCase().indexOf(searchSymbols) !== -1){
//             result.push(item);
//         }
//         });
//         return result;
//     };
// });
App.controller('MainController', function($scope, $http, $timeout) {
    var valtosend;
    $scope.searchSymbols = null;
    $scope.change = function(text) {
        valtosend = $scope.searchSymbols;
        $http.get('../api/data/company-list.json' + valtosend).then(function(result){
            $scope.entries = result.data;
        });
        };
    });