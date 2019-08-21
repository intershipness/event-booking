app.factory("loginService" , [ '$http','$location', function($http, $location){

    function login(email, password) {
        var data = {
            "email": email,
            "password": password
        }

        return $http({
            method: 'POST',
            url:'http://localhost:8080/login',
            params: data
        })
        .then(function loginSuccess(response) {
            console.log("sucess");   
            $location.path('/client')                  
          }, function loginError(response) {
            console.log("error");
          });
    }


    return {
        'loginUser': login
    }
}]);