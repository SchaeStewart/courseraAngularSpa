(function(){
	'use strict';
angular.module('NameCalculator' , [])

.controller('NameCalculatorController', function ($scope) {
	$scope.name = "";
	$scope.totalValue = 0;

	$scope.displayNumeric = function () {
		var totalNameValue = calculatorNumericForString($scope.name);
		$scope.totalValue = totalNameValue;
	}

	function calculatorNumericForString(string) {
		var totalStringvalue = 0;
		for (var i = 0; i < string.length; i++) {
			totalStringvalue += string.charCodeAt(i);
		}
		return totalStringvalue;
	}
});
})();
