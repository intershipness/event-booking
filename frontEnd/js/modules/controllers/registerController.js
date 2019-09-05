app.controller("registerController", ['$scope', 'registerService', '$location', '$localStorage',
  function ($scope, registerService, $location, $localStorage) {
    $scope.exists=false;
    var contractor = [];
  $scope.submit = function () {
      registerService.registerUser($scope.user, $scope.box, $scope.exists)
        .then(function () {
          if ($scope.box == false) {
            path = '/client';
          } else {
            path = '/contractor';
          }
          $localStorage.valueToShare = $scope.user;
          localStorage.setItem("contractor", JSON.stringify($scope.user));  
         $location.path(path);
        }, function () {
          console.log("ERROR in controller register")
        })

    }
  }
]);