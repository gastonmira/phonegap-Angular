var contactsModule = angular.module('contactsModule', []);

contactsModule.controller('ContactsCtrl', ['$scope',
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