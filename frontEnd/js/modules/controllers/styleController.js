app.controller('styleController',['$scope', 'filterService','$location',function ($scope,filterService,$location) {

    $scope.filterList = [];

    // Watch styles for changes
    var stil = JSON.parse(localStorage.getItem("style"));
          filterService.getDomain(stil).then(function (response) {
           
            $scope.filterList = response.data;
            console.log(stil + ": ")
            console.log($scope.filterList);
            $location.path("/filter");
          }, function () {
            console.log("ERROR in get style")
          }) 
  
  }]);
      
    