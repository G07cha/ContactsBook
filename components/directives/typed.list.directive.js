;(function() {

  'use strict';

  /**
   * List of inputs
   *
   * @param title {String} - Label in header
   * @param placeholder {String} - will be used in input element
   * @param type {String} - Input type(like "text", "tel" and etc)
   * @param types {Array} - Types for dropdown
   * @param items {Array} - List of already existing types
   * @param ontypechange {Function} - [Optional] Callback that will be called
   * with item's index when type for this item will be changed
   *
   * @example
     <typed-list title="Email:"
       placeholder="Enter Email Address"
       type="email"
       types="edit.types"
       ontypechange="edit.setPhonePrefix"
       items="edit.contact.emails">
     </typed-list>
   */
  angular
    .module('ContactsList')
    .directive('typedList', MainLayout);

  function MainLayout($location) {
    var directiveDefinitionObject = {
      restrict: 'E',
      scope: {
        items: '=',
        types: '=',
        ontypechange: '&'
      },
      templateUrl: 'components/directives/typed-list.html',
      link: function($scope, $element, $attributes) {
        // Some static properties(that don't linked to variables)
        $scope.title = $attributes.title;
        $scope.type = $attributes.type;
        $scope.placeholder = $attributes.placeholder;
      },
      controller: ['$scope', function($scope) {
        // Add item to the list with a default type
        $scope.add = function() {
          $scope.items.push({ type: $scope.types[0] });
          $scope.ontypechange()($scope.items.length - 1);
        }

        $scope.remove = function(index) {
          $scope.items.splice(index, 1);
        }
      }]
    };

    return directiveDefinitionObject;
  }

})();
