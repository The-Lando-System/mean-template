(function() { 'use strict';

angular.module('my-app')
.factory('TestFactory', TestFactory);

TestFactory.$inject = ['$http','Exception'];

function TestFactory($http, Exception) {
  return {
        getHello: getHello,
        getGoodbye: getGoodbye
    };
    
    function getHello(token,username,successCallback,errorCallback){
      var header = {
        headers: { 
          'x-access-token': token 
        }
      };
      return $http.get('/user/hello/' + username, header)
      .success(function(data){
        return successCallback(data);
      })
      .error(function(error){
        var err = Exception.catchSvcException(error);
        return errorCallback(err.name + err.message);
      });
    };
    
    function getGoodbye(token,username,successCallback,errorCallback){
      var header = {
        headers: { 
          'x-access-token': token 
        }
      };
      return $http.get('/admin/goodbye/' + username, header)
      .success(function(data){
        return successCallback(data);
      })
      .error(function(error){
        var err = Exception.catchSvcException(error);
        return errorCallback(err.name + err.message);
      });
    };
};

})();