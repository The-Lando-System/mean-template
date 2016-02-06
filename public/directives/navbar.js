(function() { 'use strict';

angular.module('myApp').directive('navbar', navbar);

function navbar() {
  return {
    templateUrl: '/navbar',
    restrict: 'E'
  };
};

})();