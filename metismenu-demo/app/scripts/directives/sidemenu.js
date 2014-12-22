'use strict';

/**
 * @ngdoc directive
 * @name metismenuDemoApp.directive:sideMenu
 * @description
 * # sideMenu
 */
angular.module('metismenuDemoApp')
  .directive('sideMenu', function () {
    return {
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
        $(element).metisMenu();
      }
    };
  });
