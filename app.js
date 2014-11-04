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

app.controller('HomeController', ['$scope', 
	function($scope){
		$scope.log = function() {
			console.log($scope.form);
		}
}])

app.directive('aaPattern', [function(){
	return {
		require: 'ngModel',
		link: function($scope, iElm, iAttrs, controller) {
			var PATTERN = /A.*A/;
			controller.$validators.aaPattern = function(modelValue, viewValue) {
				return PATTERN.test(viewValue);
			};
		}
	};
}]);

app.directive('unique', ['$q', '$timeout', function($q, $timeout) {
	return {
		require: 'ngModel',
		link: function($scope, element, attributes, controller) {
			var existingUsernames = ['galaxy', 'stars', 'planets', 'pluto'];			
			controller.$asyncValidators.unique = function(modelValue, viewValue) {
				var defer = $q.defer();
				$timeout(function() {
					if (existingUsernames.indexOf(modelValue) === -1) {
						defer.resolve();
					} else {
						defer.reject();
					}
				}, 2000);
				return defer.promise;
			};
		}
	};
}])