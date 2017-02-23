var red = angular.module('red',[]);

red.controller("ctrl", function($scope, $http) {
  $http.get('https://www.reddit.com/r/aww/.json')
  .success(function(console.log("hello")));
