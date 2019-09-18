app.controller("registerController", ['$scope', 'contractorService', '$location', '$localStorage', '$window','registerService',
      function ($scope, contractorService, $location, $localStorage, $window, registerService) {
        var contr;
        $scope.exists = false;
        console.log( $scope.exists);
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
            if ($scope.styles[i].Selected == true) {
              style = $scope.styles[i].Name;
            }
          }
          
        }


        $scope.submit = function () {
          
          registerService.registerUser($scope.user, $scope.box, style)
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
                localStorage.setItem("logEmail", JSON.stringify($scope.user.email));
               
                console.log("in reg controller: ");
                
                $location.path(path);

                contractorService.getDetails(m).then(function (response) {
                  contr = response.data;
                  console.log("with id: ");
                  console.log(contr);
                  localStorage.setItem("contractor", JSON.stringify(contr));
                }, function () {
                  console.log("error in get details reg controller")
                  
                })
              }, function (response) {
                if(response.status == 400)
                {
                  $scope.exists = true;
                  $window.scrollTo(0, 400);}
              }
                
            )
          }
      }
      ]);