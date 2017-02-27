var app = angular.module('app',[]);

app.controller("controller", function($scope)

{
  $http.get('https://www.reddit.com/r/aww/.json')
  .then(function(response){
    console.log(response);
    // var title=response.data.children[0].data.title;
    // console.log(title);
  });
});
