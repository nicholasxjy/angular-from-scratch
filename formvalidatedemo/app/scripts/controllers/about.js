'use strict';

/**
 * @ngdoc function
 * @name formvalidatedemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the formvalidatedemoApp
 */
angular.module('formvalidatedemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
