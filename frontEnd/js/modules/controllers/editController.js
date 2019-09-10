app.controller('editController', ['$scope', '$http', '$localStorage','contractorService', function ($scope, $http, $localStorage, contractorService) {

  $scope.details = [];
  
  // 
  var maill = JSON.parse(localStorage.getItem("logEmail"));
  console.log(maill);
  
  var contractor = JSON.parse(localStorage.getItem("contractor"));
  var url = "http://localhost:8080/Contractor/email"; 
  var mail = {
    email: maill
  }
 
  $http({
    method: 'GET',
    url: url,
    params: mail //data
})
    .then(function succes(response) {
      $scope.details = response.data;
      if(response.data.descriere == null){
      $scope.editorEnabledDescr = false;}
      console.log("succes get");
      // if(response.data.improgile == null){
      //   $scope.imgName="images/default.jpg"
      // }
      // else{
      //   $scope.imgName=response.data.improgile;
      // }
     // $localStorage.valueToShare = response.data;
      localStorage.setItem("contractor", JSON.stringify(response.data));  

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


    $http({
      method: 'PUT',
      url: "http://localhost:8080/Contractors/"+ contractor.id,
      data: $scope.details
  })
   // $http.put(url, )
      .then(function regSucces(response) {
        console.log("succes put")
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
