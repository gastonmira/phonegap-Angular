var myApp = angular.module('myApp', ['ngRoute']).
config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/homeView.html',
		controller: 'myAppCtrl'
	}).
	when('/geolocation', {
		templateUrl: 'partials/geolocation.html',
		controller: 'GeolocationCtrl'
	}).
	when('/device', {
		templateUrl: 'partials/device.html',
		controller: 'DeviceCtrl'
	}).
	when('/contacts', {
		templateUrl: 'partials/contactsView.html',
		controller: 'ContactsCtrl'
	}).
	otherwise({
		redirectTo: '/'
	})
});

myApp.controller('myAppCtrl', ['$scope',
	function($scope) {

	}
]);

myApp.controller('GeolocationCtrl', ['$scope',
	function($scope) {
		navigator.geolocation.getCurrentPosition(function(position) {
			$scope.position = position;
			$scope.$apply();
		}, function(e) {
			console.log("Error retrieving position " + e.code + " " + e.message)
		});
	}
]);

myApp.controller('DeviceCtrl', ['$scope',
	function($scope) {
		$scope.device = device;
	}
]);

myApp.controller('ContactsCtrl', ['$scope',
	function($scope) {
		$scope.find = function() {
			$scope.contacts = [];
			var options = new ContactFindOptions();
			//options.filter=""; //returns all results
			options.filter = $scope.searchTxt;
			options.multiple = true;
			var fields = ["displayName", "name", "phoneNumbers"];
			navigator.contacts.find(fields, function(contacts) {
				$scope.contacts = contacts;
				console.log("contacts", $scope.contacts);
				$scope.$apply();
			}, function(e) {
				console.log("Error finding contacts " + e.code)
			}, options);
		}
	}
]);