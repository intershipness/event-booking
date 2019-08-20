app.controller("contractorsController", ['$scope', '$http',
  function ($scope, $http) {
    $scope.contractorsList = [];
    
    $http.get("http://localhost:8080/Contractors")
      .then(function regSucces(response) {
        $scope.contractorsList = response.data;
        console.log("succes get")
        console.log($scope.contractorsList);
      }, function regErr(response) {
        $scope.content = "Something went wrong";
        
      });

  }
]);