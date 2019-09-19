app.controller('submitController', ['$scope','$window','$rootScope',
function ($scope, $window, $rootScope ) {

     $scope.clearLogin = function () {
        // delete $window.sessionStorage;
        $window.localStorage.clear();
        $scope.isLogged = false;
        $scope.notLogged = true;
      };
    $rootScope.$on('loginEvent', function (event,email) {
    console.log("++++++++++"+email);
    if(email!== null){
      $scope.isLogged = true;
      $scope.notLogged = false;
    }
  });
}])

