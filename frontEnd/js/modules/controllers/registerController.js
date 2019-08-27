app.controller("registerController", ['$scope', 'registerService', '$location',
  function ($scope, registerService, $location) {
  $scope.submit = function () {

      console.log("in controller");
      
      console.log($scope.box);
      registerService.registerUser($scope.user, $scope.box)
        .then(function () {
          console.log("SUCCES");
          //console.log($scope.user);
          
          if ($scope.box == false) {
            path = '/client';
          } else {
            path = '/contractor';
          }
         $location.path(path);
        }, function () {
          console.log("ERROR in controller")
        })

    }
  }
]);