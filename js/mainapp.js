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
      $http.get('ContactsBook/contacts.json')
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

;(function() {

  angular
    .module('ContactsList')
    .controller('DashboardController', DashboardController);

  function DashboardController() {

  }
})();

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

;(function() {

  angular
    .module('ContactsList')
    .controller('EditController', EditController);

  EditController.$inject = ['LocalStorage', '$location', '$routeParams'];


  function EditController(LocalStorage, $location, $routeParams) {
    var self = this;
    var contactsList = LocalStorage.get('contacts');
    var phonePrefix = {
      work: '+91',
      home: '+020'
    }

    // Phone, email types for select element
    self.types = [{name: 'Work', value: 'work'}, {name: 'Personal', value: 'home'}]
    // Contact object(will be created new if id don't specified)
    self.contact =
      ($routeParams.id)
        ?
          contactsList[parseInt($routeParams.id)]
        : {
      emails: [{ type: self.types[0] }],
      phones: [{ type: self.types[0], value: phonePrefix.work }]
    }

    self.setPhonePrefix = function(index) {
      var phone = self.contact.phones[index];

      if(phone.value) {
        // Replacing only prefix to keep other data safe
        for (var prefix in phonePrefix) {
          if (phonePrefix.hasOwnProperty(prefix)) {
            var phoneRegexp = new RegExp('^' + escapeRegExp(phonePrefix[prefix]));
            phone.value = phone.value.replace(phoneRegexp, '');
          }
        }
      }

      phone.value = phonePrefix[phone.type.value] + (phone.value || '');
    }

    self.save = function() {
      // Update or insert contact
      if($routeParams.id) {
        contactsList[parseInt($routeParams.id)] = self.contact;
      } else {
        contactsList.push(self.contact);
      }

      LocalStorage.update('contacts', contactsList);
      $location.path('/contacts');
    }

    // Escape conflicting character in string that will be provided for Regexp constructor
    function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
  }
})();
