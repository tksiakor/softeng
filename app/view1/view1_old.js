'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
    var url = "http://localhost:8080/genie?uid=11&name=kpetermeni";
    

    // $http.post('http://localhost:8080/ical',{ "uid": "john", "email": "doe" }).success(function(response) {
    //        console.log("success");
    //       }).error(function(err){
    //          console.log("failure")
    //       });
       

        $http.get(url).success(function (data) {
          console.log(url);

        // var arr = $.map(data, function(value, key){return value;});
        // $scope.summary = [];
        // $scope.ical = arr;
        // $scope.count = arr.length;

        // $scope.summary.push(arr[0].summary);
        // $scope.summary.push(arr[1].summary);
        // $scope.summary.push(arr[0].summary);
       
      })
       // $scope.summary = $scope.summary.split(':')

        // $http.get(url).success(function (data) {

        //   var arr = $.map(data, function(value, key){return value;});
        //   $scope.summary = [];
        // $scope.ical = arr;
        // $scope.count = arr.length;

        // $scope.summary.push(arr[0].summary);
        // $scope.summary.push(arr[1].summary);
        // $scope.summary.push(arr[0].summary);
       
      //})

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