(function() { 'use strict';

angular.module('myApp')
.config(config);

function config($urlRouterProvider,$stateProvider,$locationProvider) {
  
  $urlRouterProvider.otherwise('/login');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/login',
    controller: 'loginController'
  })
  .state('home', {
    url: '/home',
    templateUrl: '/home',
    controller: 'homeController'
  })
  .state('view1', {
    url: '/view1',
    templateUrl: '/view1',
    controller: 'view1Controller',
    controllerAs: 'vm'
  })
  .state('view2', {
    url: '/view2',
    templateUrl: '/view2',
    controller: 'view2Controller',
    controllerAs: 'vm'
  })
  .state('users', {
    url: '/user-management',
    templateUrl: '/user-management',
    controller: 'userMgmtController'
  })
  .state('user-page', {
    url: '/user-management/:userId',
    templateUrl: '/user-page',
    controller: 'userController'
  });
};

})();