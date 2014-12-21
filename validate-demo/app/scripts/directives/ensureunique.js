'use strict';

/**
 * @ngdoc directive
 * @name validateDemoApp.directive:ensureUnique
 * @description
 * # ensureUnique
 */
angular.module('validateDemoApp')
  .directive('ensureUnique', function ($http) {
    return {
      require: 'ngModel',
      link: function postLink(scope, element, attrs, c) {
        var url = attrs.ensureUnique;
        c.$parsers.push(function(val) {
          if (!val || val.length === 0) {
            return;
          }
          c.$setValidity('checkingAvailability', true);
          c.$setValidity('usernameAvailability', false);
          $http({
            method: 'GET',
            url: url,
            params: {
              username: val
            }
          }).success(function(data) {
            c.$setValidity('checkingAvailability', false);
            c.$setValidity('usernameAvailability', true);
            return val;
          })
        })
      }
    };
  });
