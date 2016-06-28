;(function() {
	/**
	 * Place to store API URL or any other constants
	 * Usage:
	 *
	 * Inject CONSTANTS service as a dependency and then use like this:
	 * CONSTANTS.API_URL
	 */
  angular
  	.module('ContactsList')
    .constant('CONSTANTS', {
      'LOCAL_STORAGE_LIST': 'contacts'
    });
})();
