app.controller("userController",['$scope', 'userService','$location', 
function($scope, userService, $location){
  //app.controller("userController",function($scope, $location){
  $scope.box=false;
  
	$scope.submit = function() {

    console.log("in controller");
    var userPath = userService.path; 

    userService.registerUser($scope.user, $scope.box)
    .then(function(userPath){
      console.log("SUCCES");
      //console.log($scope.user)
      $location.path(userPath);
    },function(){
    console.log("ERROR in controller")
  })
    
  }
}]);