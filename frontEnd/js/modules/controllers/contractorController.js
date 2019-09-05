app.controller("contractorController", ['$scope', '$location',
  function ($scope, $location) {
    $scope.gotoContractor = function () {
      localStorage.setItem("cselected", JSON.stringify($scope.contractor)); 
      var con = JSON.parse(localStorage.getItem("contr"));
      console.log(con);
      $location.path("/contractorPage");
    }
  }
]);