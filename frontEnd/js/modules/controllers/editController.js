app.controller('editController', ['$scope', '$http', function ($scope, $http) {
  // $scope.details = {
  //           name: "Octavia",
  //           lastName: "Bradea",
  //           mobile: "0772255889",
  //           numescena: 'nume_scena',
  //           canalyoutube: 'canal_youtube',
  // 		      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.'
  // 	};

  // 	$scope.details = {
  //       name: user.name,
  //       lastName: user.lastName,
  //       mobile: user.mobile,
  //       numescena: user.nume_scena,
  //       canalyoutube: user.canal_youtube
  //   };

  $scope.details = [];
  var url = "http://localhost:8080/Contractors/40";

  $http.get(url)
    .then(function regSucces(response) {
      $scope.details = response.data;
      if(response.data.descriere == null){
      $scope.editorEnabledDescr = false;}
      console.log("succes get")
    }, function regErr(response) {
      $scope.content = "Something went wrong";

    });

  //post pe id-ul contractorului pe care il iau din get-ul de sus

  $scope.editorEnabled = true;
  $scope.editorEnabledDescr = true;

  $scope.confirm = function () {
    $scope.submitted = true;
    $scope.editorEnabled = true;
    $scope.editorEnabledDescr = true;
    $http.put(url, $scope.details)
      .then(function regSucces(response) {
        console.log("succes put")
        console.log($scope.details);
      }, function regErr(response) {
        $scope.content = "Something went wrong";

      });
  }
  $scope.edit = function () {
    $scope.editorEnabled = false;

  }
  $scope.editDescr = function () {
    $scope.editorEnabledDescr = false;

  }

}]);
