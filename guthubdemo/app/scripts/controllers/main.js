'use strict';

/**
 * @ngdoc function
 * @name guthubdemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guthubdemoApp
 */
angular.module('guthubdemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
