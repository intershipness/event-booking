app.factory("registerService" , function($http, $q) {
    
    function registerUser(user, box, style) {
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
                stilmuzica:style
            }
        }
        var user =  { "email": user.email}
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
               
                deferred.reject(error);
            });
            return deferred.promise;

       
    }


    // function getDetails(email) {
    //     url = 'http://localhost:8080/Contractor/email';

    //     var deferred = $q.defer();
        
    //     $http({
    //             method: 'POST',
    //             url: url,
    //             data: email //data
    //         })
    //         .then(function detailsSuccess(response) {
    //             deferred.resolve(response);
    //         }, function detailsError(error) {
    //             deferred.reject(error);
    //         });
    //     return deferred.promise;
    // }
    
    return {
        'registerUser' : registerUser
    }       

});