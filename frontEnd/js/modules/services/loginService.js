app.factory("loginService" , [ '$http','$location', function($http, $location, ){

    function login(email, password) {
        var user = {
            "email": email,
            "password": password

        }
        
        return $http({
            method: 'POST',
            url:'http://localhost:8080/login',
            
            dataType: "json",
            headers: {
                "Content-Type": 'application/json'
            },data: user
        })
        .then(function loginSuccess(response) {
            //fetch login details and save to local storage
          
            //only then move to another page
            console.log("sucess in login"); 

            $location.path('/client')                  
          }, function loginError(response) {
            console.log("error in login");
            
            
          });
    }


    return {
        'loginUser': login
    }
}]);