(function() { 'use strict';

angular.module('myApp').controller('navbarController', navbarController);

navbarController.$inject = ['AuthService'];

function navbarController(AuthService) {
  
  var vm = this;
  vm.logout = logout;

  function logout(){
    AuthService.logout();
    vm.userSession = AuthService.endUserSession();
  };

  angular.element(document).ready(function () {
    vm.userSession = AuthService.startUserSession();
  });
  
};

})();