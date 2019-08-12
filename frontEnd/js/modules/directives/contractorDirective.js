app.directive('userTypeDirective',function(){
    
    $scope.getType = function(box){

        if(box=false){
            //isUser();
            return {    
                        restrict: 'E',
                        templateUrl: "register.html" 
            }
        }
        else{
            //isContractor();
            return {
                    restrict: 'E',
                    templateUrl: "register_contractor.html"
                }
        }
    }
});