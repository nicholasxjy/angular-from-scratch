'use strict';

/**
 * @ngdoc function
 * @name filterdemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the filterdemoApp
 */
angular.module('filterdemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
