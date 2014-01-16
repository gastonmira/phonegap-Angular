var moduleDev = angular.module('deviceModule', []);

moduleDev.controller('DeviceCtrl', ['$scope',
	function($scope) {
		$scope.device = device;
	}
]);