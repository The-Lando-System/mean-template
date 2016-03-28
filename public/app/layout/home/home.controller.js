(function() { 'use strict';

angular.module('my-app')
.controller('HomeController', HomeController);

HomeController.$inject = ['AuthService'];

function HomeController(AuthService) {
	var vm = this;

	vm.headerMessage = "Angular Template";
	vm.hello = "Home Page";
    vm.logout = logout;

	function logout(){
		AuthService.logout();
	};
};

})();