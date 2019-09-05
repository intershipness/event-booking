app.factory("contractorService", ['$http','$q', function ($http, $q) {

    function getDetails(email) {
        url = 'http://localhost:8080/Contractor/email';

        var deferred = $q.defer();
        
        $http({
                method: 'GET',
                url: url,
                params: email
            })
            .then(function detailsSuccess(response) {
                deferred.resolve(response);
            }, function detailsError(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    }

    return {
        'getDetails': getDetails

    }
}]);