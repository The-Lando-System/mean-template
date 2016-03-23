(function() { 'use strict';

angular.module('my-app')
.directive('errorMessage', ErrorMessage);

function ErrorMessage() {
  return {
    templateUrl: '/error-message',
    restrict: 'E'
  };
};

})();