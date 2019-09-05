app.controller('loginController', ['$scope', 'loginService', '$location',function ($scope, loginService, $location ) {

    $scope.email = "";
    $scope.password = "";
    // $scope.isLogged=false;
    $scope.submit = function () {

      loginService.loginUser($scope.email, $scope.password)
        .then(function (response) {
          console.log("merge login controller");
          $location.path('/client')
          // $scope.isLogin = true;
        
        }, function () {
          // $scope.isLogout = true;
          console.log("nu merge login controller");

        })
    
    }
  }]);

   