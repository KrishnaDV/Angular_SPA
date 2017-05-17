var app = angular.module("gitRep", []);

var ctrl2 = function ($scope, $http) {
	
	$scope.user = "dkvishal";
	
    var onSuccess = function (response) {
        $scope.repos = response.data;
    };
    
    var onError = function (error) {
    	$scope.repos = null;
    	alert("Sorry! Could not get details about repo");
    };
    
    $scope.getRepos = function(){
        $http.get("https://api.github.com/users/"+$scope.user+"/repos").then(onSuccess, onError);
    	}
};

app.controller("ctrl2", ["$scope", "$http",ctrl2]);