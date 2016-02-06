(function() { 'use strict';

angular.module('myApp').factory('testFactory', testFactory);

testFactory.$inject = ['$http','exception'];

function testFactory($http, exception) {
  return {
        getHello: getHello,
        getGoodbye: getGoodbye
    };
    
    function getHello(successCallback,errorCallback){
      return $http.get('/testapi/hello')
      .success(function(data){
        return successCallback(data);
      })
      .error(function(error){
        var err = exception.catchSvcException(error);
        return errorCallback(err.name + err.message);
      });
    };
    
    function getGoodbye(successCallback,errorCallback){
      return $http.get('/testapi/goodbye')
      .success(function(data){
        return successCallback(data);
      })
      .error(function(error){
        var err = exception.catchSvcException(error);
        return errorCallback(err.name + err.message);
      });
    };
};

})();