app.controller('avatarController', ['$scope', '$http', 'contractorService', function ($scope, $http, contractorService) {

    // var urlAvatar = "http://localhost:8080/upload";
    // $http.get(urlAvatar, {
    //       params: {
    //         "id": id
    //       }
    //     })
    //     .then(function avatarSucces(response) {
    //       $scope.avatar = response.data.avatar;
    //     }, function avatarErr(response) {
    //       console.log("eroare get pt avatar")

    //     });
    $scope.name = "images/add.png"
    console.log("in avatar controller:")
    var contractor = JSON.parse(localStorage.getItem("contractor"));
    console.log(contractor);
    var idd = {
      "id": contractor.id
    }
    var mail = {
      "email": contractor.email
    }
    $scope.name = contractor.avatar;
    console.log(contractor.avatar);
    $scope.uploadFile = function (files) {
      var url = "http://localhost:8080/upload";
      var data = new FormData();
      //Take the first selected file
      data.append("file", files[0]);



      $http.post(url, data, {
        withCredentials: false,
        headers: {
          'Content-Type': undefined
        },
        params: idd,
        // transformRequest: angular.identity
      }).then(function (response) {
        console.log('succes avatr get');
        $scope.name = contractor.avatar;
        // console.log(contractor.imgprogile)

        //then fetch user data with updated image url
        contractorService.getDetails(mail).then(function (response) {
          $scope.name = response.data.avatar
        }, function () {
          console.log("error in get image name")
        })


        // contractorService.getDetails(mail)
        // $scope.name = contractor.imgprogile
        //save to local storage
        localStorage.setItem("contractor", JSON.stringify(response.data));
      }, function (response) {
        console.log("eroare avatar get")
      })
    };
  }

]);
