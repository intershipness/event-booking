//directiva pentru box-urile contractorilor din pag contractori 
app.directive('contractorBox', [function() {
    return {
      restrict: 'E',
      scope: {
          contractor: '='
      },
      //template: '<h3>Contractor box</h3>',
    templateUrl: 'templates/contractorBox.html',
   
    };
  }]);