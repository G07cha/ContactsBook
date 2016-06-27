;(function() {

  angular
    .module('boilerplate')
    .controller('EditController', EditController);

  EditController.$inject = ['LocalStorage', '$location'];


  function EditController(LocalStorage, $location) {
    var self = this;
    var contactsList = LocalStorage.get('contacts');
    var phonePrefix = {
      work: '+91',
      home: '+020'
    }

    self.types = [{name: 'Work', value: 'work'}, {name: 'Home', value: 'home'}]
    self.contact = {
      emails: [{ type: self.types[0] }],
      phones: [{ type: self.types[0], value: phonePrefix.work }]
    }


    self.addEmail = function() {
      self.contact.emails.push({ type: self.types[0] });
    }

    self.removeEmail = function(index) {
      self.contact.emails.splice(index, 1);
    }

    self.addPhone = function() {
      self.contact.phones.push({ type: self.types[0], value: phonePrefix.work });
    }

    self.removePhone = function(index) {
      self.contact.phones.splice(index, 1);
    }

    self.setPhonePrefix = function(index) {
      var phone = self.contact.phones[index];

      // Replacing only prefix to keep other data safe
      for (var prefix in phonePrefix) {
        if (phonePrefix.hasOwnProperty(prefix)) {
          var phoneRegexp = new RegExp('^' + escapeRegExp(phonePrefix[prefix]));
          phone.value = phone.value.replace(phoneRegexp, '');
        }
      }
      phone.value = phonePrefix[phone.type.value] + phone.value;
    }

    function escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }

    self.save = function() {
      contactsList.push(self.contact);
      LocalStorage.update('contacts', contactsList);
      $location.path('/contacts');
    }
  }
})();
