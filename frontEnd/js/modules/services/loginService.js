app.factory("loginService" , [ '$http','$q', function($http, $q){
    
    function login(email, password) {
        var user = {
            "email": email,
            "password": password

        }
        console.log(user);
        
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url:'http://localhost:8080/loginn',
            data: user
                
            }).then(function regSucces(response) {
                deferred.resolve(response);
                console.log("succes login service");
                console.log(response);
                return response.data;
            }, function regErr(error){
                console.log("error login service");
                deferred.reject(error);
                console.log(error);
            });
            return deferred.promise;
    }


    return {
        'loginUser': login
    }
}]);
 // return $http({
        //     method: 'POST',
        //     url:'http://localhost:8080/login',
            
        //     dataType: "json",
        //     headers: {
        //         "Content-Type": 'application/json'
        //     },data: user
        // })
        // .then(function loginSuccess(response) {
        //     //fetch login details and save to local storage
          
        //     //only then move to another page
        //     console.log("sucess in login"); 

        //     $location.path('/client')                  
        //   }, function loginError(response) {
        //     console.log("error in login");
            
            
        //   });