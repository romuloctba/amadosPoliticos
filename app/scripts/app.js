'use strict';

/**
 * @ngdoc overview
 * @name transpAppApp
 * @description
 * # transpAppApp
 *
 * Main module of the application.
 */
angular
  .module('transpAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(
    function($http){
    $http.defaults.headers.common['App-Token'] = 'TPX9FKZhjHHQ'
    }
    )
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/candidato/:id', {
        templateUrl: 'views/candidato.html',
        controller: 'BensctrlCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
