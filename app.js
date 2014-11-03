app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});