app.controller('avatarController', ['$scope', '$http', 'contractorService', function ($scope, $http, contractorService) {
    $scope.name = "images/add.png"

    console.log("init avatar controller:")
    
    function updateAvt() {
      var contractor = JSON.parse(localStorage.getItem("contractor"));
      
      if(contractor != null){
        $scope.name = contractor.avatar;
      }
    }
    
   
    updateAvt();
    
    $scope.uploadFile = function (files) {
      var url = "http://localhost:8080/upload";
      var data = new FormData();
      //Take the first selected file
      data.append("file", files[0]);
    };

    //subscribe loged in => updateAvt()
  }

]);
