app.controller("registerController", ['$scope', 'userService', '$location',
  function ($scope, userService, $location) {
    //app.controller("userController",function($scope, $location){
    //$scope.box = false;
    var path;
    if ($scope.box == false) {
      path = '/client';
    } else {
      path = '/contractor';
    }

    

    $scope.submit = function () {

      console.log("in controller");
      //var userPath = userService.path; 

      userService.registerUser($scope.user, $scope.box)
        .then(function () {
          console.log("SUCCES");
          //console.log($scope.user);
         $location.path(path);
        }, function () {
          console.log("ERROR in controller")
        })

    }
  }
]);