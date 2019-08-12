app.factory("userService" , function($http){
    $scope.isUser = function(){

    }
    $scope.isContractor = function(){

    }

    $scope.sendUser = function(){
        if($scope.box == false)
        {
            var type = client;
        }
        else{
            var type = contractor;
        }
        var user = $.param({
            name: $scope.name,
            email: $scope.email,
            password: $scope.password

        })
    }


//    var user;
//    return{
//        user
    //    user: {
    //        nume:"Octavia",
    //        email:"octavia@yahoo.com",
    //        password:"123456",
	// 	   tel:"0774406582",
    //        tip:"Pop"
    // }
   //}
});