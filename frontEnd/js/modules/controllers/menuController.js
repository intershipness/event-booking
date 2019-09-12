app.controller("menuController", function($scope, $location) { 
  $scope.goTo = function(page){
    $location.path(page);
  }
    
  });
  