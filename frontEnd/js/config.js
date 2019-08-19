 app.config(['$routeProvider', '$translateProvider',
     function ($routeProvider, $translateProvider) {
         $routeProvider
             .when("/index", {
                 templateUrl: "index.html"
             })
             .when("/login", {
                 templateUrl: "templates/login.html"

             })
             .when("/register", {
                 templateUrl: "templates/register.html",

             })
             .when("/register_contractor", {
                 templateUrl: "templates/register_contractor.html"

             })
             .when("/client", {
                 templateUrl: "templates/client.html"

             })
             .when("/contractor", {
                 templateUrl: "templates/contractor.html"

             })

            .when("/contact", {
                templateUrl: "templates/contact.html",

            })
            .when("/about", {
                templateUrl: "templates/about.html",

            })
             .otherwise({
                 redirectTo: "templates/index.html"
             });


         
         $translateProvider.useStaticFilesLoader({
             prefix: '/translations/',
             suffix: '.json'
         });

         $translateProvider.determinePreferredLanguage();
     }
 ]);
