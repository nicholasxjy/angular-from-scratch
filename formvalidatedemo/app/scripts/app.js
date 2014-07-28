'use strict';

/**
 * @ngdoc overview
 * @name formvalidatedemoApp
 * @description
 * # formvalidatedemoApp
 *
 * Main module of the application.
 */
angular
  .module('formvalidatedemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/main.html',
        controller: 'MyCtrl'
      })
      .when('/about', {
        templateUrl: '../views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
