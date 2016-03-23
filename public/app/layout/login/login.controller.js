(function() { 'use strict';

angular.module('my-app')
.controller('LoginController', LoginController);

LoginController.$inject = ['$window','$location','jwtHelper','AuthService'];

function LoginController($window,$location,jwtHelper,AuthService) {
	
	var vm = this;

	vm.authFail = false;
	vm.login = login;

	function login(formIsValid){
		if (formIsValid){
			AuthService.login(vm.creds, function(data){
				if (data.success) {
					vm.userSession = AuthService.startUserSession();
					//$window.location.reload();
				} else {
					vm.authFail = true;
					vm.errorMessage = data.message;
				}
			});
		}
	};

	angular.element(document).ready(function () {
		vm.userSession = AuthService.startUserSession();
		if (vm.userSession.user) {
			$location.path('home');
		}
	});
};

})();