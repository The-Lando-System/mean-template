(function() { 'use strict';

angular.module('myApp')
.config(config);

function config($urlRouterProvider,$stateProvider,$locationProvider) {
  
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/login/login.html',
    controller: 'loginController',
    controllerAs: 'vm'
  })
  .state('home', {
    url: '/home',
    templateUrl: '/home/home.html',
    controller: 'homeController',
    controllerAs: 'vm'
  })
  .state('view1', {
    url: '/view1',
    templateUrl: '/view1/view1.html',
    controller: 'view1Controller',
    controllerAs: 'vm'
  })
  .state('view2', {
    url: '/view2',
    templateUrl: '/view2/view2.html',
    controller: 'view2Controller',
    controllerAs: 'vm'
  })
  .state('users', {
    url: '/user-management',
    templateUrl: '/users/user-management.html',
    controller: 'userMgmtController',
    controllerAs: 'vm'
  })
  .state('user-page', {
    url: '/user-management/:userId',
    templateUrl: '/users/user.html',
    controller: 'userController',
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

};

})();