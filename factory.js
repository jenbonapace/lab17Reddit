var.factory('app',function($http){
  var promise=null;

})
return function() {
    if (promise) {

      var deferred =$q.defer();


      app.factory('ourFactory', function($http) {

        var masterObject = {};

        return {       grabData: function() {         $http({           url: 'https://www.reddit.com/r/aww/' ,           method: 'GET'         }).then(function successfulCallback(response) {           masterObject = response;
               }, function(error) {           console.log(error);
               });       }     }

      });
