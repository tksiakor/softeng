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
    var url = "http://localhost:8080/ical";
   
      //   $http.get(url).success(function (data) {

      //     var arr = $.map(data, function(value, key){return value;});
      //     $scope.summary = [];
      //   $scope.ical = arr;
      //   $scope.count = arr.length;

      //   // $scope.summary.push(arr[0].summary);
      //   // $scope.summary.push(arr[1].summary);
      //   // $scope.summary.push(arr[0].summary);
       
      // })
        //$scope.summary = $scope.summary.split(':')

        $http.get(url).success(function (data) {

          var arr = $.map(data, function(value, key){return value;});
          $scope.summary = [];
        $scope.ical = arr;
        $scope.count = arr.length;

        // $scope.summary.push(arr[0].summary);
        // $scope.summary.push(arr[1].summary);
        // $scope.summary.push(arr[0].summary);
       
      })

    }
/*
      $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
        success(function(data, status) {
          $scope.status = status
          var i=0;
             while(i<10){
            var d = data.substr(data.indexOf('SUMMARY'), '\n');
            console.log(d+'\n');
            i++;
          }
          $scope.data = data;

        }).
        error(function(data, status) {
          $scope.data = data || "Request failed";
          $scope.status = status;
      });
    
    */
  




  ]);