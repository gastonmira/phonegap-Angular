var myApp = angular.module('myApp', ['ngRoute', 'geolocationModule', 'deviceModule', 'contactsModule']).
config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/homeView.html',
		controller: 'myAppCtrl'
	}).
	when('/geolocation', {
		templateUrl: 'partials/geolocation.html',
		action: 'geolocationModule.GeolocationCtrl'
	}).
	when('/device', {
		templateUrl: 'partials/device.html',
		action: 'deviceModule.DeviceCtrl'
	}).
	when('/contacts', {
		templateUrl: 'partials/contactsView.html',
		action: 'contactsModule.ContactsCtrl'
	}).
	otherwise({
		redirectTo: '/'
	})
});

myApp.controller('myAppCtrl', ['$scope',
	function($scope) {

	}
]);