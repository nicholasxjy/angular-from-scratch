/**
 * Created by nicholas_xue on 14-7-28.
 */
var app = angular.module('myApp', []);

app.directive('draggable', function($document) {
    var startX = 0,startY = 0,x= 0,y=0;
    return function(scope, element, attrs) {
        element.css({
            position: 'relative',
            cursor: 'pointer'
        });
        element.bind('mousedown', function(event) {
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.bind('mousemove', mousemove);
            $document.bind('mouseup', mouseup);
        });
        function mousemove(event) {
            x = event.screenX - startX;
            y = event.screenY - startY;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }
        function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
        }
    }
});