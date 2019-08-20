app.directive('contractorBox', [function() {
    return {
      restrict: 'E',
      scope: {
          contractor: '='
      },
      //template: '<h3>Contractor box</h3>',
    templateUrl: 'templates/contractorBox.html',
    controller: function($scope){}
    };
  }]);