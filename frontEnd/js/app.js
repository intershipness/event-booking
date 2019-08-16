 var app = angular.module('app', ['ngRoute','pascalprecht.translate']);

 app.factory("asyncLoader", asyncLoader)

 // @factory
 asyncLoader.$inject = ['$q', '$timeout', '$http'];

 function asyncLoader($q, $timeout, $http) {

     return function (options) {
         var deferred = $q.defer(),
             translations;

         var resturl = "indexlang" + options.key + ".json"
         $http.get(
                 resturl, {
                     cache: false
                 }).then(function (translations) {
                 deferred.resolve(translations);
                 //alert(translations);
             }),
             function (translations) {
                 deferred.reject(translations);
             };

         $timeout(function () {
             deferred.resolve(translations);
         }, 2000);

         return deferred.promise;
     };
 }
