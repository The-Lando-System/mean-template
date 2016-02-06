(function() { 'use strict';

angular.module('myApp').controller('view2Controller', view2Controller);

view2Controller.$inject = ['testFactory'];

function view2Controller(testFactory) {
  var vm = this;
  
  vm.hello = "Hello from view 2!";
  vm.testCall = testCall;
  vm.tableData = false;
  vm.errorMessage = false;
  
  function testCall(){
    vm.errorMessage = false;
    testFactory.getGoodbye(successCallback,errorCallback);
  };
  
  function successCallback(data){
    vm.tableData = data;
  };
  
  function errorCallback(err){
    vm.errorMessage = err;
  };
};

})();