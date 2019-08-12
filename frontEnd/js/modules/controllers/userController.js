app.controller("userController" , function($scope){
  
  //var checkBox = document.getElementById("myCheck");
  $scope.box=false;
  // $scope.myFunction = function() { 
  //   var extra = document.getElementById("extra");
  //   if (checkBox.checked == true){
  //     extra.style.display = "block";
  //   } else {
  //      extra.style.display = "none";
  //   }
  // };
	$scope.submit = function() {
      
      
      $http.post('users.json', $scope.user)
        .then(function(user){
          //console.log("Post ok");
          //console.log(angular.toJson($scope.user));
          //put user data in session or local storage
          window.sessionStorage.setItem("SavedJson", JSON.stringify($scope.user));
          // if (checkBox.checked == true){
          //   window.location = '/contractor'; -> prin router
          // }
          // else{
          //   window.location = '/client';
          // }

          console.log(sessionStorage.getItem("SavedJson"));
          // var savedJson = JSON.parse(sessionStorage.getItem("SavedJson"));
          // $scope.name = savedJson.savedString ;
          // console.log("WELCOME to ");
          
        })
  };
    
});
