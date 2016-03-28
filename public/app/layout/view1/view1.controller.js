(function() { 'use strict';

angular.module('my-app')
.controller('View1Controller', View1Controller);

View1Controller.$inject = ['TestFactory','AuthService'];

function View1Controller(TestFactory,AuthService) {
  
  var vm = this;
  
  vm.hello = "Hello from view 1!";
  vm.headerMessage = "View 1";
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


  vm.items = ['item1', 'item2', 'item3'];

  vm.open = open;

  function open(size) {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: '/modal',
      controller: 'ModalController',
      controllerAs: 'vm',
      size: size,
      resolve: {
        items: function () {
          return vm.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      vm.selected = selectedItem;
    }, function () {
      console.log('Modal dismissed at: ' + new Date());
    });
  };


  angular.element(document).ready(function () {
    vm.userSession = AuthService.startUserSession();
  });
  
};

})();