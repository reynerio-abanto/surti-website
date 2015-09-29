angular.module('app.controllers', [])
.controller('loginController',
	['$scope', 'loginTextos', function($scope, loginTextos){
	// establece el texto en la applicacion
	$scope.loginTextos = loginTextos;
}]);