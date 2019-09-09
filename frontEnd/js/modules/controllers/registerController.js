app.controller("registerController", ['$scope', 'registerService', '$location', '$localStorage', '$window',
      function ($scope, registerService, $location, $localStorage, $window) {
        var contr;
        $scope.exists = false;
        var style;
        var m;
        var contractor;
        $scope.styles = [{
          stilId: 1,
          Name: 'Pop',
          Selected: false
        }, {
          stilId: 2,
          Name: 'Rock',
          Selected: false
        }, {
          stilId: 3,
          Name: 'Populara',
          Selected: false
        }, {
          stilId: 4,
          Name: 'Folk',
          Selected: false
        }];
        $scope.CheckBox_Checked = function (selectedStilId) {
          for (var i = 0; i < $scope.styles.length; i++) {
            if ($scope.styles[i].stilId != selectedStilId) {
              $scope.styles[i].Selected = false;
            }
            style = $scope.styles[i].Name;
          }
        }


        $scope.submit = function () {
          $window.localStorage.clear();
          registerService.registerUser($scope.user, $scope.box, $scope.exists, style)
            .then(function () {
                if ($scope.box == false) {
                  path = '/client';
                } else {
                  path = '/contractor';
                }
                m = {
                  email: $scope.user.email
                };
                
                localStorage.setItem("contractor", JSON.stringify($scope.user));
               
                console.log("in reg controller: ");
                
                $location.path(path);

                registerService.getDetails(m).then(function (response) {
                  contr = response.data;
                  console.log("with id: ");
                  console.log(contr);
                  localStorage.setItem("contractor", JSON.stringify(contr));
                }, function () {
                  console.log("error in get details reg controller")
                })
              }, function () {
                console.log("ERROR in controller register")
              }
                
            )
            
         
            
          
          }
      }
      ]);