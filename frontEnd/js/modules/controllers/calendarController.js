app.controller('calendarController', ['$scope', function ($scope) {

    var d=new Date();
    var year=d.getFullYear();
    var month=d.getMonth()+1;
    if (month<10){
      month="0" + month;
    }
    var day=d.getDate();
    $scope.date=day + "/" + month + "/" + year;

    // var url = "http://localhost:8080/Dates/.....";

    // $scope.dates= [];

    // $http.get(url)
    //   .then(function regSucces(response) {
    //     $scope.dates = response.data;
    //     console.log("succes get for dates")
    //     console.log($scope.dates);
    //   }, function regErr(response) {
    //     console.log("Something went wrong in get dates");
        
    //   });	



}]);