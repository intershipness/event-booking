 app.controller('filterController',['$scope', 'filterService','$location',function ($scope,filterService,$location) {

  $scope.styles = [
    { name: 'Pop',    selected: false },
    { name: 'Rock',   selected: false },
    { name: 'Populara', selected: false },
    { name: 'Folk', selected: false }
  ];


  // Selected styles
  $scope.selection = [];
  $scope.filterList = [];

  // Helper method to get selected styles
  $scope.selectedStyles = function selectedStyles() {
    return filterFilter($scope.styles, { selected: true });
  };

  // Watch styles for changes
  $scope.$watch('styles|filter:{selected:true}', function (nv) {
      $scope.selection = nv.map(function (style) {
        // filterService.getDomain(style.name).then(function (response) {
         
        //   $scope.filterList = response.data;
        //   console.log(style.name + ": ")
        //   console.log($scope.filterList);
        //   $location.path("/filter");
        // }, function () {
        //   console.log("ERROR in get style")
        // })
        localStorage.setItem("style", JSON.stringify(style.name));
        $location.path("/filter");
        
      return style.name;
    });
  }, true);
  

}]);
    
  