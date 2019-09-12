app.factory("filterService" , function($http, $q) {
    
    function getDomain(stil) {
        style={
            "stilmuzica" : stil
        }
        var url =  "http://localhost:8080/Contractor/stil";
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url:url,
            data: style
            
        }).then(function getDomainSucc(response) {
            deferred.resolve(response);
             console.log("succes post")
            return response;
        }, function getDomainErr(error){
            console.log("error post stil")
            console.log(error.data.message) //user is in bd
            //user already exists ->mesaj ascuns
            deferred.reject(error);
           //user already exists ->mesaj ascuns
        });
        
        return deferred.promise;
       
    }

   
    
    return {
        'getDomain' :  getDomain
    }       

});