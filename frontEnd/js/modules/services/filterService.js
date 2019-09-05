app.factory("filterService" , function($http) {
    
    function getDomain(tip) {
        var url =  "http://localhost:8080/Contractor/" + tip;
        return $http({
            method: 'GET',
            url:url,
            data: data,
            
        }).then(function getDomainSucc(response) {
            console.log("succes post")
            console.log(data);
            return data;
        }, function getDomainErr(response){
            console.log(response);//user already exists ->mesaj ascuns
        });
        
       
    }
    
    return {
        'getDomain' :  getDomain
    }       

});