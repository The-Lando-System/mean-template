(function() { 'use strict';

angular.module('my-app')
.directive('successMessage', SuccessMessage);

function SuccessMessage() {
  return {
    templateUrl: '/success-message',
    restrict: 'E'
  };
};

})();