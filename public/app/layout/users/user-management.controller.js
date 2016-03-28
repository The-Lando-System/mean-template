(function() { 'use strict';

angular.module('my-app')
.controller('UserMgmtController', UserMgmtController);

UserMgmtController.$inject = ['$location','jwtHelper','AuthService','UserFactory'];

function UserMgmtController($location,jwtHelper,AuthService,UserFactory) {

	var vm = this;
	vm.headerMessage = "Manage Users";
	vm.getUsers = getUsers;
	vm.deleteUser = deleteUser;

	function getUsers(){
		UserFactory.get(vm.userSession.token)
		.success(function(data){
			vm.users = data;
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	};

	function deleteUser(user){
		var confirmDelete = confirm('Are you sure you want to delete \'' + user.username + '\'?');

		if (confirmDelete){
			UserFactory.delete(vm.userSession.token,user._id)
			.success(function(data){
				console.log(data);
				getUsers();
			})
			.error(function(data){
				console.log('Error: ' + data);
			});
		}
	};

	angular.element(document).ready(function () {
		vm.userSession = AuthService.startUserSession();
		if (vm.userSession.user) {
			getUsers();
		} else {
			$location.path('login');
		}
	});

};

})();