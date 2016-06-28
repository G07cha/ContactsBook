;(function() {

  'use strict';

  /**
   * Main navigation, just a HTML template
   * @author Jozef Butko
   * @ngdoc  Directive
   *
   * @example
   * <main-layout><main-layout/>
   *
   */
  angular
    .module('ContactsList')
    .directive('mainLayout', MainLayout);

  MainLayout.$inject = ['$location'];

  function MainLayout($location) {
    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/main-layout.html'
    };

    return directiveDefinitionObject;
  }

})();
