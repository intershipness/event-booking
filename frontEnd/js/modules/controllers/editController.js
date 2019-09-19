app.controller('editController', ['$scope','contractorService','$rootScope',
 function ($scope, contractorService, $rootScope) {

  $scope.details = [];
  $scope.name = "images/add.png"
  var idd;
  var mail;
  var maill = JSON.parse(localStorage.getItem("logEmail"));
  //var contractor = JSON.parse(localStorage.getItem("contractor"));
  mail={
    "email": maill
  }
  $rootScope.$on('loginEvent', function (event,email) {
    console.log("------"+email);
    mail={
    "email": email
  }
  });
 
  contractorService.getDetails(mail).then(function (response) {
    $scope.details = response.data;
    if (response.data.descriere == null) {
      $scope.editorEnabledDescr = false;
    }
    console.log("succes get");
    localStorage.setItem("contractor", JSON.stringify(response.data));
    console.log(response.data);
    idd= {"id": response.data.id};
    // var contractor = response.data;
  }, function () {
    console.log("Something went wrong in post editController");
  })

  //post pe id-ul contractorului pe care il iau din get-ul de su
  $scope.editorEnabled = true;
  $scope.editorEnabledDescr = true;
  function updateAvt() {
    var contractor = JSON.parse(localStorage.getItem("contractor"));
   
    if(contractor != null){
      $scope.name = contractor.avatar;
      name = contractor.avatar;
      
    }
  }
  updateAvt();

  $scope.confirm = function () {
    $scope.submitted = true;
    $scope.editorEnabled = true;
    $scope.editorEnabledDescr = true;

    var contractor = JSON.parse(localStorage.getItem("contractor"));
    if (contractor != null) {
      contractorService.putContractor(contractor.id, $scope.details).then(function (response) {
          console.log("put with succes in edit controller");
        }),
        function () {
          console.log("error put in edit controller")
        }
    }
  }
  $scope.uploadFile = function (files) {
    var data = new FormData();
    //Take the first selected file
    data.append("file", files[0]);
    
    contractorService.upload(idd, data).then(function(response){
      //////subscribe loged in => updateAvt()
      localStorage.setItem("contractor", JSON.stringify(response.data));
      updateAvt();
    }), function(){
      console.log("error in post image name")
    }

} 

  $scope.edit = function () {
    $scope.editorEnabled = false;

  }
  $scope.editDescr = function () {
    $scope.editorEnabledDescr = false;

  }

}]);
