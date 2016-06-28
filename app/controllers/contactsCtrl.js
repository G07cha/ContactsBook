;(function() {

  angular
    .module('ContactsList')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['$scope', 'LocalStorage'];


  function ContactsController($scope, LocalStorage) {
    self = this;
    // Append index to each element
    self.list = LocalStorage.get('contacts').map((c, index) => {
      c.id = index + 1;
      return c;
    });
  }
})();
