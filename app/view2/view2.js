'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
   var url = "http://localhost:8080/genie?uid=nigga";
      $http.get(url).success(function () {

        //   var arr = $.map(data, function(value, key){return value;});
        //   $scope.summary = [];
        // $scope.ical = arr;
        // $scope.count = arr.length;

        // $scope.summary.push(arr[0].summary);
        // $scope.summary.push(arr[1].summary);
        // $scope.summary.push(arr[0].summary);
       
      });

    }])

    
  