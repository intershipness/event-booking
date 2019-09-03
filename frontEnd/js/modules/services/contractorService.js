app.factory("contractorService" , [ '$http', function($http){

    function getDetails(id) {
       url = 'http://localhost:8080/Contractors/' + id;

        return $http({
            method: 'GET',
            url: url,
        })
        .then(function detailsSuccess(response) {  
            console.log("sucess get contractor by id"); 
            console.log(response);            
          }, function detailsError() {
            console.log("error get contractor by id");
          });
    }


    return {
        'getDetails': getDetails
    }
}]);