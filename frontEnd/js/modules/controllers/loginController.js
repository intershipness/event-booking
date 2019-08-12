
   var app = angular.module('app');
   app.controller('loginController', function($scope, $rootScope, $stateParams, $state, loginService,$http) {
      
      $scope.formSubmit = function() {
        if(loginService.login($scope.name, $scope.password)) {
          $rootScope.Name = $scope.name;
          $scope.error = '';
          $scope.name = '';
          $scope.email = '';
          $scope.password = '';
          $state.transitionTo('home');
        } else {
          $scope.error = "Incorrect username/password !";
        }   
      };  
     $http({
       method:'GET',
       url:'localhost:8080/Users'})
       .then(function(response){
         $scope.employees = response.data;
       });
    });

