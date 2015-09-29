angular.module('app.directives', [])

.directive('resizeHeight', ['$state', function($state) {
    return {
        link: function(scope, element) {
            scope.resize = function() {
                var minHeight = 0;
                if ($state.current.name === 'login') {
                     minHeight = $('.container-fluid').first().height() - 50;
                } else {
                     minHeight = $('.container-fluid').first().height() - 220;
                }
                $(element).css('min-height', minHeight);
            };
            scope.resize();
            $(window).resize(function() {
                scope.resize();
            });
        }
    };

}]);
