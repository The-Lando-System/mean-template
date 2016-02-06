(function() { 'use strict';

angular.module('myApp').controller('view1Controller', view1Controller);

view1Controller.$inject = ['testFactory'];

function view1Controller(testFactory) {
  
  var vm = this;
  
  vm.hello = "Hello from view 1!";
  vm.testCall = testCall;
  vm.tableData = false;
  vm.errorMessage = false;
  
  function testCall(){
    vm.errorMessage = false;
    testFactory.getHello(successCallback,errorCallback);
  };
  
  function successCallback(data){
    vm.tableData = data;
  };
  
  function errorCallback(err){
    vm.errorMessage = err;
  };
  
};

})();