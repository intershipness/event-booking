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

    function putContractor(id, details){
        var deferred1 = $q.defer();
        $http({
            method: 'PUT',
            url: "http://localhost:8080/Contractors/"+ id,
            data: details
        })
         // $http.put(url, )
            .then(function regSucces(response) {
                console.log("succes put contractor details")
                deferred1.resolve(response);
            }, function regErr(error) {
                deferred1.reject(error);
            });
        return deferred1.promise;
    }

    function upload(id, img) {
        var deferred2 = $q.defer();
        var urll="http://localhost:8080/upload";
        $http({
            method:'POST',
            url: urll,
            data: img, 
            withCredentials: false,
            headers: {
                'Content-Type': undefined
            },
            params: id
            // transformRequest: angular.identity
        }).then(function (response) {
            console.log('succes avatr post');
            deferred2.resolve(response);
            console.log(response);
            // $scope.name = name;
        }, function (error) {
            deferred2.reject(error);
        });
        return deferred2.promise;
    }

    return {
        'getDetails': getDetails,
        'putContractor': putContractor,
        'upload': upload

    }
}]);