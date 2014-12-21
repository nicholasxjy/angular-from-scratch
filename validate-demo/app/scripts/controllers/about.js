'use strict';

/**
 * @ngdoc function
 * @name validateDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the validateDemoApp
 */
angular.module('validateDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
