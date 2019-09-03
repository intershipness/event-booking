app.controller("contractorController", ['$scope','$location',
  function ($scope, $location) {
  $scope.gotoContractor = function () {
        $location.path("/contractorPage");
        console.log("pathhh");

  }
}
]);