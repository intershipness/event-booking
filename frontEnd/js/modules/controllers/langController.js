(function () {
    app.controller("localController", localController)
        /* .factory("springRestLocalFetchservice",springRestLocalFetchservice) */
    
    //@controller
    localController.$inject = ['$translate', '$scope', '$rootScope', '$state'];

    function localController($translate, $scope, $rootScope, $state) {
        $scope.defaultlanguage = true;
        //$scope.state = $state;
        $scope.changeLanguage = function (langKey) {


            if (langKey === 'en') {
                $rootScope.lang = "en";
                $scope.defaultlanguage = true;
                //changeLanguageFeedbackPanel(langKey);
            }
            if (langKey === 'ro') {
                $rootScope.lang = "ro";
                $scope.defaultlanguage = false;
                //changeLanguageFeedbackPanel(langKey);
                console.log("merge");
            }


            $translate.use(langKey);
        };

    }

})();