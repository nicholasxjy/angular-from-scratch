'use strict';
/**
 * @ngdoc function
 * @name formvalidatedemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formvalidatedemoApp
 */
var app = angular.module('formvalidatedemoApp', []);
app.controller('MyCtrl', function($scope) {
    $scope.data = {};
});
var INTEGER_REG = /^\-?\d*$/;
app.directive('integer', function() {
    return {
        require: 'ngModal',
        link: function(scope, ele, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                if (INTEGER_REG.test(viewValue)) {
                    ctrl.$setValidity('integer', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('integer', false);
                    return undefined;
                }
            });
        }
    };
});

var FLOAT_REG = /^\-?\d+((\.|\,)\d+)?$/;
app.directive('smartFloat', function() {
    return {
        require: 'ngModal',
        link: function(scope, ele, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                if (FLOAT_REG.test(viewValue)) {
                    ctrl.$setValidity('flaot', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('flaot', false);
                    return undefined;
                }
            });
        }
    };
});

