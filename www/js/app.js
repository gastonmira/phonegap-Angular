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
		var fields = ["displayName", "name", "phoneNumbers"];
		var options = new ContactFindOptions();
		options.multiple = true;
		navigator.contacts.find(fields, function(contacts) {
			$scope.contacts = contacts;
			$scope.$apply();
		}, function(e) {
			console.log("Error finding contacts " + e.code)
		}, options);

	}
]);