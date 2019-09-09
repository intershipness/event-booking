app.controller('loginController', ['$scope', 'loginService', '$location',function ($scope, loginService, $location ) {

    $scope.email = "";
    $scope.password = "";
    // $scope.isLogged=false;
    $scope.submit = function () {

      loginService.loginUser($scope.email, $scope.password)
        .then(function (response) {
          console.log("merge login controller");
          localStorage.setItem("logEmail", JSON.stringify($scope.email));
          if(response.data == "contractor")
          {
            $location.path('/contractor')
          }
          else{
             $location.path('/client')
          }
         
          // $scope.isLogin = true;
        
        }, function () {
          // $scope.isLogout = true;
          console.log("nu merge login controller");

        })
    
    }
  }]);

   