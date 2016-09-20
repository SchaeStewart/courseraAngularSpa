(function(){
	'use strict';

	angular.module('DIApp', [])
	.controller('DIController', DIController);

	function DIController($scope, $filter, $injector){
		$scope.name = "Schaffer"

		$scope.upper = function(){
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		}
		function AnnnotateMe(name, job, blah){
			return "Blah!";
		}

		console.log($injector.annotate(DIController));
	}

})();
