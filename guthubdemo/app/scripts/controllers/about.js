'use strict';

/**
 * @ngdoc function
 * @name guthubdemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guthubdemoApp
 */
angular.module('guthubdemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
