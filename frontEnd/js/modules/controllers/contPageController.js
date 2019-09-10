app.controller("contPageController", ['$scope',
  function ($scope) {
   var con = JSON.parse(localStorage.getItem("con"));
   console.log(con.lastName);
   console.log(con);
   $scope.firstName = con.name;
   $scope.lastName = con.lastName;
   $scope.numescena = con.numescena;
   $scope.canalyoutube = con.canalyoutube;
   $scope.mobile = con.mobile;
   $scope.canalyoutube = con.canalyoutube;
   $scope.src = con.imgprogile;
   $scope.descriere = con.descriere;
   $scope.tip = con.domeniu;
   $scope.stil = con.stilmuzica;
  }
]);