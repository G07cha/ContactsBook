!function(){function config($routeProvider,$locationProvider){$locationProvider.html5Mode(!1),$routeProvider.when("/",{templateUrl:"views/dashboard.html",controller:"DashboardController",controllerAs:"dashboard"}).when("/contacts",{templateUrl:"views/contacts.html",controller:"ContactsController",controllerAs:"contacts"}).when("/edit/:id",{templateUrl:"views/edit.html",controller:"EditController",controllerAs:"edit"}).when("/edit",{templateUrl:"views/edit.html",controller:"EditController",controllerAs:"edit"}).otherwise({redirectTo:"/"})}function run(ServerData,CONSTANTS){ServerData.loadData(CONSTANTS.LOCAL_STORAGE_LIST)}angular.module("ContactsList",["ngRoute","angularUtils.directives.dirPagination"]).config(config),config.$inject=["$routeProvider","$locationProvider"],angular.module("ContactsList").run(run),run.$inject=["ServerData","CONSTANTS"]}(),function(){angular.module("ContactsList").constant("CONSTANTS",{LOCAL_STORAGE_LIST:"contacts"})}(),function(){"use strict";function LocalStorageService($window,$rootScope){function set(name,val){return supported||console.log("localStorage not supported, make sure you have the $cookies supported."),null===window.localStorage.getItem(name)?$window.localStorage&&$window.localStorage.setItem(name,angular.toJson(val)):void console.warn("localStorage with the name "+name+" already exists. Please pick another name.")}function get(name){return supported||console.log("localStorage not supported, make sure you have the $cookies supported."),$window.localStorage&&angular.fromJson($window.localStorage.getItem(name))}function update(name,val){return supported||console.log("localStorage not supported, make sure you have the $cookies supported."),$window.localStorage&&$window.localStorage.setItem(name,angular.toJson(val))}function remove(name){return supported||console.log("localStorage not supported, make sure you have the $cookies supported."),$window.localStorage&&$window.localStorage.removeItem(name)}function removeAll(){return supported||console.log("localStorage not supported, make sure you have the $cookies supported."),$window.localStorage&&$window.localStorage.clear()}function list(){return $window.localStorage}var storage="undefined"==typeof window.localStorage?void 0:window.localStorage,supported=!(void 0===typeof storage||void 0===typeof window.JSON);return angular.element($window).on("storage",function(event,name){event.key===name&&$rootScope.$apply()}),{set:set,get:get,update:update,remove:remove,removeAll:removeAll,list:list}}angular.module("ContactsList").factory("LocalStorage",["$window","$rootScope",LocalStorageService])}(),function(){"use strict";function MainLayout($location){var directiveDefinitionObject={restrict:"E",templateUrl:"components/directives/main-layout.html"};return directiveDefinitionObject}angular.module("ContactsList").directive("mainLayout",MainLayout),MainLayout.$inject=["$location"]}(),function(){"use strict";function MainLayout($location){var directiveDefinitionObject={restrict:"E",scope:{items:"=",types:"=",ontypechange:"&"},templateUrl:"components/directives/typed-list.html",link:function($scope,$element,$attributes){$scope.title=$attributes.title,$scope.type=$attributes.type,$scope.placeholder=$attributes.placeholder},controller:["$scope",function($scope){$scope.add=function(){$scope.items.push({type:$scope.types[0]}),$scope.ontypechange()($scope.items.length-1)},$scope.remove=function(index){$scope.items.splice(index,1)}}]};return directiveDefinitionObject}angular.module("ContactsList").directive("typedList",MainLayout)}();