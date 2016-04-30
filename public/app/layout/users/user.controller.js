(function() { 'use strict';

angular.module('my-app')
.controller('UserController', UserController);

UserController.$inject = ['$location','$stateParams','jwtHelper','AuthService','UserFactory'];

function UserController($location,$stateParams,jwtHelper,AuthService,UserFactory) {

	var vm = this;

	vm.headerMessage = "Edit a user";
	vm.errorMessage = false;
	vm.successMessage = false;
	vm.editedUser = {};
	vm.getUser = getUser;
	vm.updateOrCreateUser = updateOrCreateUser;
	vm.updateUser = updateUser;
	vm.createUser = createUser;
	vm.clearMessages = clearMessages;

	var userId = $stateParams.userId || false;

	function getUser() {
		clearMessages();
		UserFactory.get(vm.userSession.token)
		.success(function(users){
			for (var i=0;i<users.length;i++){
				if (users[i]._id === userId){
					vm.editedUser = users[i];
					vm.editedUser.password = '';
				}
			}
			if (!vm.editedUser.hasOwnProperty('role')){
				vm.editedUser.role = 'user';
			}
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	};

	function updateOrCreateUser(isCreate){
		if (isCreate){
			createUser();
		} else {
			updateUser();
		}
	};

	function updateUser(){
		clearMessages();
		UserFactory.edit(vm.userSession.token,vm.editedUser._id,vm.editedUser)
		.success(function(data){
			vm.successMessage = data.message;
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	};

	function createUser(){
		clearMessages();
		UserFactory.create(vm.userSession.token,vm.editedUser)
		.success(function(data){
			if (data.success){
				alert(data.message);
				$location.path('user-management');
			} else {
				vm.errorMessage = data.message;
			}
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	};

	function clearMessages(){
		vm.errorMessage = false;
		vm.successMessage = false;
	};

	angular.element(document).ready(function () {
		vm.userSession = AuthService.startUserSession();
		if (vm.userSession.user) {
			getUser();
		} else {
			$location.path('login');
		}
		vm.isCreate = userId ? false : true;
	});
};

})();