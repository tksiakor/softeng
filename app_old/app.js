'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.link = "http://ashesi.edu.gh/resources/events.html?task=ical.download&id=181";
  var url= 'http://localhost:8080/all';
  
  // $http.get(url).success(function (data) {
  //         console.log(url);
          
  //         $scope.clickme = function(){
  //           window.open(url, '_self');

  //         }
  //     })
  //      .error(function(data){
  //       console.log("there was an error -_-")

  //     })
}])