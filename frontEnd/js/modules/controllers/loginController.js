app.controller('loginController', ['$scope', 'loginService', '$location','$window', '$route',function ($scope, loginService, $location,$window, $route ) {

    $scope.email = "";
    $scope.password = "";
    $scope.wrong = false;
    
    $scope.submit = function () {
      $scope.isLogged = false;
      $scope.notLogged = true;
      console.log("islogged: " + $scope.isLogged + ", not logged:" + $scope.notLogged)
      loginService.loginUser($scope.email, $scope.password)
        .then(function (response) {
          console.log("merge login controller");
            //  $scope.isLogged=true;
            //  $scope.notLogged=false;
          $scope.$broadcast('loginEvent', $scope.email);
          $scope.$emit('loginEvent', $scope.email);
          localStorage.setItem("logEmail", JSON.stringify($scope.email));
          if(response.data == "contractor")
          {
            $location.path('/contractor');
           
          }
          else{
             $location.path('/client')

          }
         
          // $scope.isLogin = true;
        
        }, function regErr(error) {
          // $scope.isLogout = true;
          console.log("nu merge login controller");
          if(error.status == 400){
            $scope.wrong = true;
          }

        })
       
    }
  }]);

   