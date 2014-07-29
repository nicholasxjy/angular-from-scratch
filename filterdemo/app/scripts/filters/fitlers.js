/**
 * Created by nicholas_xue on 14-7-29.
 */
'use strict';
var app = angular.module('filterdemoApp', []);

app.filter('reverse', function() {
    return function(input, uppercase) {
        var out = '';
        out = input.split('').reverse().join('');
        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    }
});