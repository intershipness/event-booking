 app.config(['$routeProvider', '$translateProvider','$locationProvider',
     function ($routeProvider, $translateProvider, $locationProvider) {
         $routeProvider
             .when("./", {
                 templateUrl: "/index.html"
             })
             .when("/login", {
                 templateUrl: "templates/login.html",
                 

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
            .when("/contractori", {
                templateUrl: "templates/contractori.html",
                controller: "contractorsController"

            })
            .when("/contractorBox",{
                templateUrl: "templates/contractorBox.html",
                controller: "contractorsController"
            })
            .when("/contractorPage",{
                templateUrl: "templates/contractorPage.html",
                controller: "contractorController"
            })
             .otherwise({
                 redirectTo: "/index.html"
             });


         //translate
         $translateProvider.useStaticFilesLoader({
             prefix: '/translations/',
             suffix: '.json'
         });

         $translateProvider.determinePreferredLanguage();

         //date-piker

         
     }
 ]);
