(function() { 'use strict';

angular.module('my-app')
.directive('objectTable', ObjectTable);

function ObjectTable() {
  return {
    templateUrl: '/object-table',
    restrict: 'E'
  };
};

})();