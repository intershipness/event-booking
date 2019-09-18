 app.config(['$routeProvider', '$translateProvider','$locationProvider',
     function ($routeProvider, $translateProvider, $locationProvider) {
         $routeProvider
             .when("/", {
                 templateUrl: "templates/home.html"
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
            .when("/filter",{
                templateUrl: "templates/filter.html",
                controller: "filterController"
            })
            .when("/contractorBox",{
                templateUrl: "templates/contractorBox.html",
                controller: "contractorsController"
            })
            .when("/filterBox",{
                templateUrl: "templates/filterBox.html",
                controller: "filterController"
            })
            .when("/contractorPage",{
                templateUrl: "templates/contractorPage.html",
                controller: "contractorController"
            })
            .when("/home",
            {
                templateUrl:"templates/home.html"

            })
             .otherwise({
                 redirectTo: "/index.html" //??
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
