app.factory("userService" , function($http) {

    function registerUser(user, box) {
        if(box == false){
            var url = 'http://localhost:8080/Users';
            var path = '/client';
            var data = {
                first_name: user.nume,
                last_name: user.lastname,
                email: user.email,
                telefon: user.tel
            }
        }
        else{
            var url = 'http://localhost:8080/Users/Contractor';
            var path = '/contractor';
            var data = {
                first_name: user.name,
                last_name: user.lastname,
                email: user.email,
                telefon: user.tel,
                stage_name: user.numeStage,
                canalYt: user.yt,
                tip: user.tip,
                stil: user.stil
            }
        }
        /*
        return $http.post(url, data).then(
            function RegSucces(response){
                console.log("succes");
                console.log(data);
                return data;
            }, function RegErr(){
                console.log("error in service");
            }
        )
    }*/

        return $http({
            method: 'POST',
            url: url,
            data: data,
            
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