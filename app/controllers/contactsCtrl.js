;(function() {

  angular
    .module('boilerplate')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['$scope', 'LocalStorage'];


  function ContactsController($scope, LocalStorage) {
    self = this;
    self.list = LocalStorage.get('contacts').map((c, index) => {
      c.id = index + 1;
      return c;
    });
  }
})();
