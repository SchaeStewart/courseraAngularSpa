(function(){
	'use strict'

	angular.module('LunchCheckerApp', [])
	.controller('LunchController', LunchController);

	LunchController.$inject = ['$scope'];

	function LunchController($scope){
		//Declare my variables
		$scope.lunchItems = "";
		$scope.message;
		$scope.numOfLunchItems = "";

		//checks the number of comma seperated items in the text box
		$scope.checkLunch = function() {
			//Checks for an empty text box
		if($scope.lunchItems == ""){
				$scope.message = "Please enter data first";
				return;
		}

		//Converts the input from the textbox to string, splits the string into an array using commas, gets the length of the arrray
		$scope.numOfLunchItems = $scope.lunchItems.toString();
		$scope.numOfLunchItems = $scope.numOfLunchItems.split(",");
		$scope.numOfLunchItems = $scope.numOfLunchItems.length;

		//Checks if the number of itmes is <=3 or if they are > 3
		if($scope.numOfLunchItems <= 3){
			$scope.message = "Enjoy!";
		} else if ($scope.numOfLunchItems > 3) {
			$scope.message = "Too much!";
		}
	}
}
})();
