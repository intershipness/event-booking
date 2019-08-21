 app.controller('filterController',['$scope', 'filterFilter',function ($scope,filterFilter) {
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
      return style.name;
    });
  }, true);
  $scope.$watch('domains|filter:{selected:true}', function (nv) {
    $scope.selection = nv.map(function (domain) {
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
