app.controller("userController",['userService', function($scope,userService){
  
  //$scope.box=false;
  // $scope.myFunction = function() { 
  //   var extra = document.getElementById("extra");
  //   if (checkBox.checked == true){
  //     extra.style.display = "block";
  //   } else {
  //      extra.style.display = "none";
  //   }/////////////////////////////
  // };
	$scope.submit = function() {
    
    userService.sendData();
    }
    
}]);
