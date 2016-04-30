(function() { 'use strict';

angular.module('my-app')
.controller('UserMgmtController', UserMgmtController);

UserMgmtController.$inject = ['$location','jwtHelper','AuthService','UserFactory'];

function UserMgmtController($location,jwtHelper,AuthService,UserFactory) {

	var vm = this;
	vm.headerMessage = "Manage Users";
	vm.newUser = { role: "user" };
	vm.editedUser = {};
	vm.getUsers = getUsers;
	vm.deleteUser = deleteUser;
	vm.showNewUserModal = showNewUserModal;
	vm.hideNewUserModal = hideNewUserModal;
	vm.showEditUserModal = showEditUserModal;
	vm.hideEditUserModal = hideEditUserModal;
	vm.createUser = createUser;
	vm.updateUser = updateUser;

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

	function createUser(){
		UserFactory.create(vm.userSession.token,vm.newUser)
		.success(function(data){
			if (data.success){
				alert(data.message);
				getUsers();
				hideNewUserModal();
			} else {
				alert(data.message);
			}
		})
		.error(function(data){
			console.log('Error: ' + data);
		});
	};

	function updateUser(){
		UserFactory.edit(vm.userSession.token,vm.editedUser._id,vm.editedUser)
		.success(function(data){
			alert(data.message);
			hideEditUserModal();
		})
		.error(function(data){
			alert(data.message);
		});
	};

  function showNewUserModal(){
  	if(!vm.newUserDialog){
  		vm.newUserDialog = document.querySelector('#new-user-dialog');
  	}
  	vm.newUserDialog.showModal();
  };

  function hideNewUserModal(){
  	if(!vm.newUserDialog){
  		vm.newUserDialog = document.querySelector('#new-user-dialog');
  	}
  	vm.newUserDialog.close();
  	vm.newUser = { role: "user" };
  };

  function showEditUserModal(){
  	if(!vm.editUserDialog){
  		vm.editUserDialog = document.querySelector('#edit-user-dialog');
  	}
  	vm.editUserDialog.showModal();
  };

  function hideEditUserModal(){
  	if(!vm.editUserDialog){
  		vm.editUserDialog = document.querySelector('#edit-user-dialog');
  	}
  	vm.editUserDialog.close();
  	vm.editedUser = {};
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