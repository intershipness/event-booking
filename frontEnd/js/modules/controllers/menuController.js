app.controller("menuController.js", function($scope) {

    //Mobile menu default = hidden
    $scope.toggleNav = false;
    
    //Hamburger icon default
    $scope.animate = false;
  
    //Closes mobile menu when opening new views
    $scope.close = function(){
      $scope.toggleNav = false;
      $scope.animate = false;
    } 
      
   $scope.elsewhrClicks = function($event){
     var menu = $('#mobile-nav-menu'), 
         menuIcon = $('#nav-toggle');
     if(!menuIcon.is($event.target) && menuIcon.has($event.target).length === 0) {
       if(!menu.is($event.target) && $scope.toggleNav == true) {
       $scope.close();
       }
     }
   };
    
  });
  