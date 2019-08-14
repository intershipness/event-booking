var app = angular.module('app');
app.controller('loginController', ['$scope', 'loginService',
  function ($scope, loginService,) {
    $scope.email="";
    $scope.password="";

    $scope.submit = function () {

      loginService.loginUser($scope.email, $scope.password);

      /*
      if (loginService.login($scope.name, $scope.password)) {
        $rootScope.Name = $scope.name;
        $scope.error = '';
        $scope.name = '';
        $scope.email = '';
        $scope.password = '';
        $state.transitionTo('home');
      } else {
        $scope.error = "Incorrect username/password !";
      }*/
    };
  }
]);
