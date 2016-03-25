(function() { 'use strict';

angular.module('my-app')
.controller('NavbarController', NavbarController);

NavbarController.$inject = ['AuthService','$scope'];

function NavbarController(AuthService,$scope) {
  
  var vm = this;
  vm.logout = logout;

  $scope.$on('login', function(event, success) {
    if (success){
      vm.userSession = AuthService.startUserSession();
    }
  });

  $scope.$on('logout', function(event, success) {
    if (success){
      vm.userSession = AuthService.endUserSession();
    }
  });

  function logout(){
    var confirmLogout = confirm('Are you sure you want to logout?');
    if (confirmLogout){
      AuthService.logout();
      vm.userSession = AuthService.endUserSession();
    }
  };

  angular.element(document).ready(function () {
    vm.userSession = AuthService.startUserSession();
  });
  
};

})();