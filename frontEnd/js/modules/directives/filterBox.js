app.directive('filterBox', [function() {
    return {
      restrict: 'E',
      scope: {
          contractor: '='
      },
      //template: '<h3>Contractor box</h3>',
    templateUrl: 'templates/filterBox.html',
    // template:'<h3>Contractor box</h3>',
    controller: function($scope){}
    };
  }]);