app.factory("userService" , function($scope, $http){

    $scope.SendData = function () {
         var data = $.param({
             name: user.name,
             mail: user.mail,
         });

        $http.post('http://localhost:8080/Users', data, config)
                .success(function (data, status, headers, config) {
                    $scope.PostDataResponse = data;
                })
                .error(function (data, status, header, config) {
                    $scope.ResponseDetails = "Data: " + data +
                        "<hr />status: " + status +
                        "<hr />headers: " + header +
                        "<hr />config: " + config;
                });
        }
    // $scope.isUser = function(){

    // }
    // $scope.isContractor = function(){

    // }

    // $scope.sendUser = function(){
    //     if($scope.box == false)
    //     {
    //         var type = client;
    //     }
    //     else{
    //         var type = contractor;
    //     }
    //     var user = $.param({
    //         name: $scope.name,
    //         email: $scope.email,
    //         password: $scope.password

    //     })
    // }


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