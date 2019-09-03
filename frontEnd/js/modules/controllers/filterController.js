 app.controller('filterController',['$scope', 'filterService',function ($scope,filterService) {
      // Styles
      // $scope.styles = [{
      //   style: 
      //     [
      //       { name: 'Pop',    selected: false },
      //       { name: 'Rock',   selected: false },
      //       { name: 'Populara', selected: false },
      //       { name: 'Folk', selected: false }
      //     ]
        
      // },
      //   {domain: [
      //     { name: 'Dj',    selected: false },
      //     { name: 'Band',   selected: false },
      //     { name: 'Performer', selected: false },
         
      //   ]
      
      // }];



  $scope.styles = [
    { name: 'Pop',    selected: false },
    { name: 'Rock',   selected: false },
    { name: 'Populara', selected: false },
    { name: 'Folk', selected: false }
  ];

  $scope.domains = [
    { name: 'Dj',    selected: false },
    { name: 'Band',   selected: false },
    { name: 'Performer', selected: false },
   
  ];

  // Selected styles
  $scope.selection = [];

  // Helper method to get selected styles
//   $scope.selectedStyles = function selectedStyles() {
//     return filterFilter($scope.styles, { selected: true });
//   };


  // Watch styles for changes
  $scope.$watch('styles|filter:{selected:true}', function (nv) {
      $scope.selection = nv.map(function (style) {
        console.log(style.name);
      return style.name;
    });
  }, true);
  $scope.$watch('domains|filter:{selected:true}', function (nv) {
    $scope.selection = nv.map(function (domain) {
      filterService.getDomain(style.name).then(function () {
          console.log("get domain succes");
          //console.log($scope.user);
        }, function () {
          console.log("ERROR in get domain")
        })
        console.log(domain.name);
      return domain.name;
    });
  }, true);
}]);
    
  


// $scope.fruits = ['apple', 'orange', 'pear', 'naartjie'];

    // // Selected fruits
    // $scope.selection = [];
  
    // // Toggle selection for a given fruit by name
    // $scope.toggleSelection = function toggleSelection(fruitName) {
    //   var idx = $scope.selection.indexOf(fruitName);
  
    //   // Is currently selected
    //   if (idx > -1) {
    //     $scope.selection.splice(idx, 1);
    //   }
  
    //   // Is newly selected
    //   else {
    //     $scope.selection.push(fruitName);
    //   }
    // };
