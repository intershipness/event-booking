app.controller("contractorController", ['$scope', '$location',
  function ($scope, $location) {
    $scope.gotoContractor = function () {
      $location.path("/contractorPage");
      console.log($scope.contractor);
      localStorage.setItem("con", JSON.stringify($scope.contractor));
    }
  }
]);