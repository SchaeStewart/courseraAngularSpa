(function(){
	'use strict';

	angular.module('MsgApp', [])
	.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope', '$filter'];

	function MsgController($scope, $filter){
		$scope.name = "Schaffer";
		$scope.stateOfBeing = "hungry";
		$scope.cookieCost = .45;

		$scope.sayMessage = function (){
			var msg = "The Quick Brown Fox Jumps Over the Lazy Dog!"
			var output = $filter('uppercase')(msg);
			return output;
		};

		$scope.feedYaakov = function(){
			$scope.stateOfBeing = "fed";
		}
	}

})();
