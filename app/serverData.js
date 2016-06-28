;(function() {
  angular
    .module('ContactsList')
    .factory('ServerData', ServerData);

  ServerData.$inject = ['$http', 'LocalStorage', 'CONSTANTS'];

  function ServerData($http, LocalStorage, CONSTANTS) {
    /**
     * Get data from server and save to LocalStorage with provided name
     * @param  {String} name File name without extension(json will be applied)
     */
    function loadData(name) {
      $http.get(name + '.json')
      .then(function success(response) {
        if(LocalStorage.get(name) === null) {
          LocalStorage.set(name, response.data)
        }
      }, console.error.bind(console));
    }
    return {
      loadData: loadData
    };
  }
})();
