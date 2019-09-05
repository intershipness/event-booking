app.factory("registerService" , function($http, $q) {
    
    function registerUser(user, box, exists) {
        if(box == false){
            var url = 'http://localhost:8080/register/User';
            var data = {
                auth_user_id: "",
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
                auth_contractor_id: "",
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
        var user =  { "email": user.email}
        console.log(data);
        console.log(exists);
        var deferred = $q.defer();
        $http({
                method: 'POST',
                url: url,
                data: data,
                params: user
                
            }).then(function regSucces(response) {
                deferred.resolve(response);
                return data;
            }, function regErr(error){
                console.log(error.data.message) //user is in bd
                //user already exists ->mesaj ascuns
                deferred.reject(error);
                exists = true;
                console.log(exists)
            });
            return deferred.promise;


        // return $http({
        //     method: 'POST',
        //     url: url,
        //     data: data,
        //     params: user
            
        // }).then(function regSucces(response) {
        //     return data;
        // }, function regErr(response){
        //     console.log(response.data.message) //user is in bd
        //     //user already exists ->mesaj ascuns
        //     exists = true;
        // });
        
       
    }
    
    return {
        'registerUser' : registerUser
    }       

});