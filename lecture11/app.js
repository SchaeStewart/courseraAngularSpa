(function(){
	'use strict';

	angular.module('MsgApp', [])
	.controller('MsgController', MsgController);

	MsgController.$inject = ['$scope'];

	function MsgController($scope){
		$scope.name = "Schaffer";

		$scope.sayMessage = function (){
			return "The Quick Brown Fox Jumps Over the Lazy Dog!"
		};
	}

})();
