app.controller('avatarController', ['$scope', '$http', function ($scope, $http){ 

      $scope.uploadFile = function (files) {
        var url = "http://localhost:8080/upload";
        var data = new FormData();
        //Take the first selected file
        data.append("file", files[0]);
       
        console.log(files[0].name);

        $http.post(url, data, {
          withCredentials: false,
          headers: {
            'Content-Type': undefined
          },
          transformRequest: angular.identity
        }).then(function (response) {
            $scope.uploadResult = response.data;
            $scope.name = "images/avatars/" + files[0].name;
          }, function (response) {
            $scope.uploadResult = response.data;
          })}; 
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