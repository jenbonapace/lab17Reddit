var app = angular.module('app',[]);

app.controller("controller", function($scope, $http)

{
    $scope.redditData={};

    $http.get('https://www.reddit.com/r/aww/.json')
    .then(function successfulCallback(response){
      console.log(response);

      $scope.redditData=response.data.data.children;

    });
});
