(function(){
	'use strict'
	angular.module('myFirstApp', [])

	.controller('myFirstController', function($scope) {
		$scope.name = "schaffer";
		$scope.sayHello = function(){
			return "Hello Coursera";
		}
	});


})();
