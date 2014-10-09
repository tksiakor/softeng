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
    var url = "http://localhost:8080/ical?uid=11&stdate=20140619&edate=20141212&summary=My+first+event&description=This+event+is+the+best&location=LH221&url=not+now";
    var url2 = "http://localhost:8080/ical2";

        $http.get(url).success(function (data) {
          console.log(url);
          // window.location.assign(url);
          
          $scope.clickme = function(){
            window.open(url, '_self');

          }
      }

      )
       .error(function(data){
        console.log("there was an error -_-")

      })

        $http.get(url2).success(function (data) {
          console.log(url2);

        var arr = $.map(data, function(value, key){return value;});
        $scope.summary = [];
        $scope.ical = arr;
        $scope.count = arr.length;

      
       
      })


    }





  ]);