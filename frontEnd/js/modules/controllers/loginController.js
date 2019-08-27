var app = angular.module('app');
app.controller('loginController', ['$scope', 'loginService', function ($scope, loginService ) {

 $scope.email = "";
    $scope.password = "";
    // $scope.isLogged=false;
    $scope.submit = function () {

      loginService.loginUser($scope.email, $scope.password)
    //     .then(function () {
    //       console.log("merge");
    //       $scope.isLogin = true;
        
    //     }, function () {
    //       $scope.isLogout = true;
    //       console.log("nu merge");

    //     })
    // };
    }
  }]);

   