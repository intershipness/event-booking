app.controller('editController', ['$scope', '$http', '$localStorage','contractorService', function ($scope, $http, $localStorage, contractorService) {

  $scope.details = [];

  // 

  
  var contractor = JSON.parse(localStorage.getItem("contractor"));
  // console.log(contractor.name);
  var url = "http://localhost:8080/Contractor/email"; 
  var mail = {
    email: contractor.email
  }
  console.log(contractor.email);

 
  $http({
    method: 'GET',
    url: url,
    params: mail
})
    .then(function succes(response) {
      $scope.details = response.data;
      if(response.data.descriere == null){
      $scope.editorEnabledDescr = false;}
      console.log("succes get");
     // $localStorage.valueToShare = response.data;
      localStorage.setItem("contr", JSON.stringify(response.data));  

  //     contractorService.getDetails(mail).then(function (response) {
  //     // $scope.details = response.data.data;
  //     //   if(response.data.descriere == null){
  //     //   $scope.editorEnabledDescr = false;}
  //       console.log(response)

  // }, function () {
  //   console.log("Something went wrong in getting details")
  // })
    }, function err(response) {
      $scope.content = "Something went wrong";

    });

  //post pe id-ul contractorului pe care il iau din get-ul de sus

  $scope.editorEnabled = true;
  $scope.editorEnabledDescr = true;

  $scope.confirm = function () {
    $scope.submitted = true;
    $scope.editorEnabled = true;
    $scope.editorEnabledDescr = true;
    $http.put(url, $scope.details)
      .then(function regSucces(response) {
        console.log("succes put")
        console.log($scope.details);
      }, function regErr(response) {
        $scope.content = "Something went wrong";

      });
  }
  $scope.edit = function () {
    $scope.editorEnabled = false;

  }
  $scope.editDescr = function () {
    $scope.editorEnabledDescr = false;

  }

}]);
