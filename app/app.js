;(function() {
  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('ContactsList', [
      'ngRoute',
      'angularUtils.directives.dirPagination'
    ])
    .config(config);

  /**
   * safe dependency injection
   * this prevents minification issues
   */
  config.$inject = ['$routeProvider', '$locationProvider'];

  /**
   * App routing
   */
  function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsController',
        controllerAs: 'contacts'
      })
      .when('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditController',
        controllerAs: 'edit'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditController',
        controllerAs: 'edit'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  /**
   * Run block
   */
  angular
    .module('ContactsList')
    .run(run);

  run.$inject = ['ServerData', 'CONSTANTS'];

  function run(ServerData, CONSTANTS) {
    ServerData.loadData(CONSTANTS.LOCAL_STORAGE_LIST);
  }
})();
