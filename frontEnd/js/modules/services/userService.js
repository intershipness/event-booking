app.factory("userService" , function($http) {
    
    function registerUser(user, box) {
        if(box == false){
            var url = 'http://localhost:8080/Users';
            //path = '/client';
            var data = {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                mobile: user.mobile,
                password: user.password
            }
        }
        else{
            var url = 'http://localhost:8080/Users/Contractor';
            //path = '/contractor';
            var data = {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                mobile: user.mobile,
                stage_name: user.numeStage,
                canalYt: user.yt,
                tip: user.tip,
                stil: user.stil
            }
        }

        return $http({
            method: 'POST',
            url: url,
            data: data,
            path :path
            
        }).then(function regSucces(response) {
            console.log("succes post")
            console.log(data);
            return data;
        }, function regErr(response){
            console.log("EROARE in serviciu");
        });
        
       
    }
    
    return {
        'registerUser' : registerUser
    }       

});