app.factory("contractorService", ['$http','$q', function ($http, $q) {

    function getDetails(email) {
        url = 'http://localhost:8080/Contractor/email';

        var deferred = $q.defer();
        
        $http({
                method: 'POST',
                url: url,
                data: email //data
            })
            .then(function detailsSuccess(response) {
                deferred.resolve(response);
                console.log(response);
            }, function detailsError(error) {
                deferred.reject(error);
                console.log(error);
            });
        return deferred.promise;
    }

    return {
        'getDetails': getDetails

    }
}]);