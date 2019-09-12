app.controller('loginController', ['$scope', 'loginService', '$location','$window',function ($scope, loginService, $location,$window ) {

    $scope.email = "";
    $scope.password = "";
    
    $scope.clearLogin = function () {
      // delete $window.sessionStorage;
      
      $scope.isLogged=false;
      $scope.notLogged=true;
      $window.localStorage.clear();
    
  }; 
  $scope.hide=function(){

    $scope.isLogged=true;
    $scope.notLogged=false;
    
  }
    
    $scope.submit = function () {

      loginService.loginUser($scope.email, $scope.password)
        .then(function (response) {
          console.log("merge login controller");
             $scope.isLogged=true;
             $scope.notLogged=false;

          localStorage.setItem("logEmail", JSON.stringify($scope.email));
          if(response.data == "contractor")
          {
            $location.path('/contractor')
          }
          else{
             $location.path('/client')
          }
         
          // $scope.isLogin = true;
        
        }, function regErr(error) {
          // $scope.isLogout = true;
          console.log(error);
          console.log("nu merge login controller");

        })
       
    }
  }]);

   