 app.config(['$routeProvider', '$translateProvider',
     function ($routeProvider, $translateProvider) {
         $routeProvider
             .when("/index", {
                 templateUrl: "index.html"
             })
             .when("/login", {
                 templateUrl: "login.html"

             })
             .when("/register", {
                 templateUrl: "register.html",

             })
             .when("/register_contractor", {
                 templateUrl: "register_contractor.html"

             })
             .when("/client", {
                 templateUrl: "client.html"

             })
             .when("/contractor", {
                 templateUrl: "contractor.html"

             })
             .otherwise({
                 redirectTo: "index.html"
             });


         
         $translateProvider.useStaticFilesLoader({
             prefix: '/translations/',
             suffix: '.json'
         });

         $translateProvider.determinePreferredLanguage();
     }
 ]);
