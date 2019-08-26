app.factory("registerService" , function($http) {
    
    function registerUser(user, box) {
        if(box == false){
            var url = 'http://localhost:8080/register/User';
            var data = {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                mobile: user.mobile,
                password: user.password
            }
        }
        else{
            var url = 'http://localhost:8080/register/Contractor';
            var data = {
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                mobile: user.mobile,
                numescena: user.nume_scena,
                canalyoutube: user.canal_youtube,
                domeniu: user.domeniu_activitate,
                stilmuzica: user.stil_muzica
            }
        }
        console.log(data);
        return $http({
            method: 'POST',
            url: url,
            data: data
            
        }).then(function regSucces(response) {
            console.log("succes post")
            //console.log(data);
            return data;
        }, function regErr(response){
            console.log("EROARE in serviciu");//user already exists ->mesaj ascuns
        });
        
       
    }
    
    return {
        'registerUser' : registerUser
    }       

});