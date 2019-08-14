app.factory("loginService" , [ '$http', function($http){

    function login(email, password) {

        return $http({
            method: 'POST',
            url:'http://localhost:8080/login',
            data:{
             "email":email,
             "password": password
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