var red = angular.module('red',[]);

red.controller("ctrl", function($scope, $http) {
  $http.get('https://www.reddit.com/r/aww/.json')
  // .success(console.log("hello")
  .then(function(response){
    console.log(response);

    // $scope.title=response.data;
  });
});
