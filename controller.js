var red = angular.module('red',[]);

red.controller("ctrl", function($scope, $http)

{
  $http.get('https://www.reddit.com/r/aww/.json')
  .then(function(response){
    console.log(response);
    var title=response.data.children[0].data.title;
    console.log(title);
  });
});
