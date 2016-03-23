(function() { 'use strict';

angular.module('my-app')
.controller('View2Controller', View2Controller);

View2Controller.$inject = ['TestFactory','AuthService'];

function View2Controller(TestFactory,AuthService) {
  var vm = this;
  
  vm.hello = "Hello from view 2!";
  vm.testCall = testCall;
  vm.tableData = false;
  vm.errorMessage = false;
  
  function testCall(){
    vm.errorMessage = false;
    TestFactory.getGoodbye(vm.userSession.token,vm.userSession.user.username,successCallback,errorCallback);
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