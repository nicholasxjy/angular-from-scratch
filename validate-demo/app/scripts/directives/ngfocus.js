'use strict';

/**
 * @ngdoc directive
 * @name validateDemoApp.directive:ngFocus
 * @description
 * # ngFocus
 */
angular.module('validateDemoApp')
  .directive('ngFocus', function () {
    var FOCUS_CLASS = 'ng-focused';
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ctrl) {
        ctrl.$focused = false;
        element.bind('focus', function(evt) {
          element.addClass(FOCUS_CLASS);
          scope.$apply(function() {
            ctrl.$focused = true;
          });
        }).bind('blur', function(evt) {
          element.removeClass(FOCUS_CLASS);
          scope.$apply(function() {
            ctrl.$focused = false;
          });
        });
      }
    };
  });
