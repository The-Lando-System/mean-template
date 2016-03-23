(function() { 'use strict';

angular.module('my-app')
.controller('View1Controller', View1Controller);

View1Controller.$inject = ['TestFactory','AuthService'];

function View1Controller(TestFactory,AuthService) {
  
  var vm = this;
  
  vm.hello = "Hello from view 1!";
  vm.testCall = testCall;
  vm.tableData = false;
  vm.errorMessage = false;
  
  function testCall(){
    vm.errorMessage = false;
    TestFactory.getHello(vm.userSession.token,vm.userSession.user.username,successCallback,errorCallback);
  };
  
  function successCallback(data){
    vm.tableData = data;
  };
  
  function errorCallback(err){
    vm.errorMessage = err;
  };

  angular.element(document).ready(function () {
    vm.userSession = AuthService.startUserSession();
  });
  
};

})();