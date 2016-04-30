(function() { 'use strict';

angular.module('my-app')
.config(config);

function config($httpProvider,$urlRouterProvider,$stateProvider,$locationProvider) {
  
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/app/layout/login/login.html',
    controller: 'LoginController',
    controllerAs: 'vm'
  })
  .state('home', {
    url: '/home',
    templateUrl: '/app/layout/home/home.html',
    controller: 'HomeController',
    controllerAs: 'vm'
  })
  .state('view1', {
    url: '/view1',
    templateUrl: '/app/layout/view1/view1.html',
    controller: 'View1Controller',
    controllerAs: 'vm'
  })
  .state('view2', {
    url: '/view2',
    templateUrl: '/app/layout/view2/view2.html',
    controller: 'View2Controller',
    controllerAs: 'vm'
  })
  .state('users', {
    url: '/user-management',
    templateUrl: '/app/layout/users/user-management.html',
    controller: 'UserMgmtController',
    controllerAs: 'vm'
  })
  .state('user-page', {
    url: '/user-management/:userId',
    templateUrl: '/app/layout/users/user.html',
    controller: 'UserController',
    controllerAs: 'vm'
  });

  $urlRouterProvider
  .otherwise('/login');

  $urlRouterProvider.rule(function($injector, $location) {

    var path = $location.path();
    var hasTrailingSlash = path[path.length-1] === '/';

    if(hasTrailingSlash) {

      //if last charcter is a slash, return the same url without the slash  
      var newPath = path.substr(0, path.length - 1); 
      return newPath; 
    } 

  });

  $httpProvider.interceptors.push('Interceptor');

};

angular.module('my-app')
.run(function ($rootScope,$timeout) {
  $rootScope.$on('$viewContentLoaded', ()=> {
    $timeout(() => {
      componentHandler.upgradeAllRegistered();
    })
  })
});

})();