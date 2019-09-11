app.controller("menuController", function($scope, $location) { 
  $scope.goTo = function(page){
    $location.path(page);
  }
  
  // $scope.openNav = function() {
	//   document.getElementById("mySidenav").style.width = "250px";
	//   document.getElementById("main").style.marginLeft = "250px";
	// }
	
  // $scope.closeNav =  function () {
	//   document.getElementById("mySidenav").style.width = "0";
	//   document.getElementById("main").style.marginLeft= "0";
	// }
  








//old script, what is this??????
  //   //Mobile menu default = hidden
  //   $scope.toggleNav = false;
    
  //   //Hamburger icon default
  //   $scope.animate = false;
  
  //   //Closes mobile menu when opening new views
  //   $scope.close = function(){
  //     $scope.toggleNav = false;
  //     $scope.animate = false;
  //   } 
      
  //  $scope.elsewhrClicks = function($event){
  //    var menu = $('#mobile-nav-menu'), 
  //        menuIcon = $('#nav-toggle');
  //    if(!menuIcon.is($event.target) && menuIcon.has($event.target).length === 0) {
  //      if(!menu.is($event.target) && $scope.toggleNav == true) {
  //      $scope.close();
  //      }
  //    }
  //  };
    
  });
  