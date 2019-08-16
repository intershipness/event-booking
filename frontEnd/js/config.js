 app.config(['$routeProvider', '$translateProvider', 'asyncLoader', 
 function ($routeProvider, $translateProvider, asyncLoader) {
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

     $translateProvider.useLoader('asyncLoader');

     var langMap = {
         'en_AU': 'en',
         'en_CA': 'en',
         'en_NZ': 'en',
         'en_PH': 'en',
         'en_UK': 'en',
         'en_US': 'en',
         'ja_JP': 'ja'
     };

     $translateProvider
         .registerAvailableLanguageKeys(['en', 'ro'], langMap)
         .determinePreferredLanguage();
 }]);
