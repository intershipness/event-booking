var app = angular.module('app');
app.controller('logoutController',['$scope', '$location','loginService', '$window', function($scope,$location,loginService, $window){
  $window.localStorage.clear();
   $scope.logout = function(){
        //Just clear values from scope
        $scope.username = '';
        $scope.password = '';
        $location.path('/index.html');
    }
    loginService.loginUser($scope.email, $scope.password)
        .then(function () {
          console.log("merge");
          $scope.isLogin = true;
        
        }, function () {
          $scope.isLogout = true;
          console.log("nu merge");

        })
    }]);