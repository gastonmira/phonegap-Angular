/**
 *  Module
 *
 * routes of the app
 */
angular.module('routesApp').config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/homeView.html',
		controller: 'myAppCtrl'
	}).
	when('/geolocation', {
		templateUrl: 'partials/geolocation.html',
		module: 'geolocationModule',
		controller: 'GeolocationCtrl'
	}).
	when('/device', {
		templateUrl: 'partials/device.html',
		module: 'deviceModule',
		controller: 'DeviceCtrl'
	}).
	when('/contacts', {
		templateUrl: 'partials/contactsView.html',
		module: 'contactsModule',
		controller: 'ContactsCtrl'
	}).
	otherwise({
		redirectTo: '/'
	})
});