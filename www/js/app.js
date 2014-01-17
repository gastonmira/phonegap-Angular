angular.module('geolocationModule', []);
angular.module('deviceModule', []);
angular.module('contactsModule', []);

var myApp = angular.module('myApp', ['ngRoute', 'geolocationModule', 'deviceModule', 'contactsModule']);


myApp.controller('myAppCtrl', ['$scope',
	function($scope) {

	}
]);