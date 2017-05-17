var app = angular.module("first", []);

app.controller("FirstController", function($scope) {
	$scope.msg = "Vishal";
	$scope.day = new Date().toString();
});

app.controller("SecondController", function($scope) {
	$scope.firstname = "";
	$scope.lastname = "";
	$scope.fullname = function() {
		return $scope.firstname + " " + $scope.lastname;
	}
});
