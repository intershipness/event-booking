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
    $scope.name = "add.png"
    console.log("in avatar controller:")
    var contractor = JSON.parse(localStorage.getItem("contractor"));
    console.log(contractor);
    var idd = {
      id: contractor.id
    }
    var mail = {
      email: contractor.email
    }
    $scope.name = contractor.imgprogile;
    console.log(contractor.imgprogile);
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
        transformRequest: angular.identity
      }).then(function (response) {
        console.log('succes avatr get');
        // $scope.name = "\images\avatars\6823214-large.jpge";
        // console.log(contractor.imgprogile)


        //then fetch user data with updated image url
        contractorService.getDetails(mail).then(function (response) {
          $scope.name = response.data.imgprogile
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

// $scope.doUploadFile = function(){
//    var file = $scope.uploadedFile;
//    var url = "http://localhost:8080/upload";

//    var data = new FormData();
//    data.append('uploadfile', file);

//    var config = {
//        transformRequest: angular.identity,
//        transformResponse: angular.identity,
//      headers : {
//        'Content-Type': undefined
//        }
//    }
//    console.log("in controller");
//    console.log( $scope.uploadedFile);
//    $http.post(url, data, config).then(function (response) {
//   $scope.uploadResult=response.data;
// }, function (response) {
//   $scope.uploadResult=response.data;
// });
// };



// app.controller('avatarController',['$scope', 'avatarService', function ($scope, avatarService) {

//   var  formdata = new FormData();
//   $scope.getTheFiles = function ($files) {
//       angular.forEach($files, function (value, key) {
//           formdata.append(key, value);
//       });
//   };

// //  var file = {
// //     "file": 
// //   }

//   $scope.uploadFiles = function () {
//       avatarService.upload(formdata);
//     }


// }]);