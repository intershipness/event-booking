app.factory('sharedService', function($rootScope) {
    
    var shared = {};

    shared.message = '';

    shared.prepForBroadcast = function(msg) {
        this.message = msg;
        this.broadcastItem();
    };

    shared.broadcastItem = function() {
        $rootScope.$broadcast('loginEvent');
    };

    return shared;  
    
    //var data="";

    // return{
    //     setData:function(str){
    //         data = str;
    //     },

    //     getData:function(){
    //         return data;
    //     }
    // }
});
