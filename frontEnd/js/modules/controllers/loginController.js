app.controller('loginController', ['$scope', 'loginService', '$location','$rootScope',
function ($scope, loginService, $location,$rootScope ) {

    $scope.email = "";
    $scope.password = "";
    $scope.wrong = false;
   

    $scope.submit = function () {

      loginService.loginUser($scope.email, $scope.password)
        .then(function (response) {
          console.log("merge login controller");
          localStorage.setItem("logEmail", JSON.stringify($scope.email));
          $rootScope.$broadcast('loginEvent', $scope.email);
          
          if(response.data == "contractor")
          {
            $rootScope.$broadcast('loginEvent', $scope.email);
            $location.path('/contractor');
           
          }
          else{
             $location.path('/client')

          }
        
        }, function regErr(error) {
          console.log("nu merge login controller");
          if(error.status == 400){
            $scope.wrong = true;
          }

        })
       
    }
  }]);

   