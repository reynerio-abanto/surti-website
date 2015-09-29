angular.module('app', ['ui.router','app.controllers','app.directives','app.textos'])

.run(['$rootScope', '$location',
      function ($rootScope, $location){
	$rootScope.location = $location;
	$location.path('/login');
}])

.config(['$stateProvider', 
	function($stateProvider) {
	$stateProvider.state('login', {
		url : '/login',
		templateUrl : '../page/login.html',
		controller : 'loginController'
	});
}]);