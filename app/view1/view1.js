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
    $scope.method = 'GET';
    $scope.url = 'ashesi-event.ics';

      $scope.code = null;
      $scope.response = null;
      $scope.summary = [] // Initialize with an empty array

    $http.get($scope.url).success(function(data, status, headers, config) {
        // When the request is successful, add value to $scope.users
       	
        $scope.summary = data.split('\n')
        var temp = $scope.summary.length;
        for (var i = 0; i < temp; i++) {
        	//$scope.summary[i] = temp[i].split(':')
        	$scope.summary[i] = $scope.summary[i].substr('SUMMARY', '\n')
        };

        //$scope.summary = $scope.summary.split(':')

    })

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
    var fileInput = function ($parse) {
    return {
        restrict: "EA",
        template: "<input type='file' />",
        replace: true,          
        link: function (scope, element, attrs) {
 
            var modelGet = $parse(attrs.fileInput);
            var modelSet = modelGet.assign;
            var onChange = $parse(attrs.onChange);
 
            var updateModel = function () {
                scope.$apply(function () {
                    modelSet(scope, element[0].files[0]);
                    onChange(scope);
                });                    
            };
             
            element.bind('change', updateModel);
        }
    };
};

    var UploadController = function ($scope, fileReader) {
     
    $scope.readFile = function () {            
        fileReader.readAsDataUrl($scope.file, $scope)
                  .then(function(result) {
                        $scope.imageSrc = result;
                    });
    };
  };
    
}]);