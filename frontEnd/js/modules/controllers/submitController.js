app.controller('submitController', ['$scope', '$location','$window',function ($scope, $location,$window ) {
    console.log("IN SUBMIT CONTROLLER-------");
    $scope.$on("loginEvent", function(evt,data){ 
        // handler code here 
        var message = "Inside SendDown handler of submit Controller: " + data;
        console.log(message);
    });



    var emaill = JSON.parse(localStorage.getItem("logEmail"));
    $scope.isLogged = true;
    $scope.notLogged = false;
    $scope.clearLogin = function () {
        // delete $window.sessionStorage;
        $window.localStorage.clear();
  
      };
    console.log("islogged: " + $scope.isLogged + ", not logged:" + $scope.notLogged)
    if(emaill == null){
        $scope.isLogged = false;
        $scope.notLogged = true;
    }
    else{
        $scope.isLogged = true;
        $scope.notLogged = false;
    }
    console.log("islogged: " + $scope.isLogged + ", not logged:" + $scope.notLogged)
}])

