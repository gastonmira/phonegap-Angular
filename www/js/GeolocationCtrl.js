angular.module('geolocationModule').controller('GeolocationCtrl', ['$scope',
	function($scope) {
		navigator.geolocation.getCurrentPosition(function(position) {
			$scope.position = position;
			$scope.$apply();
		}, function(e) {
			console.log("Error retrieving position " + e.code + " " + e.message)
		});
	}
]);