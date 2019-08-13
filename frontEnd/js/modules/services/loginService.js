app.factory("loginService" , [ '$http', function($http){

    function login(email, password) {

        return $http({
            method: 'GET',
            url:'http://localhost:8080/Users',
            data:{
              'email': email,
              'password': password
            }
        })
        .then(function loginSuccess(response) {
            console.log("sucess");
          }, function loginError(response) {
            console.log("error");
          });
    }


    return {
        'loginUser': login
    }
}]);