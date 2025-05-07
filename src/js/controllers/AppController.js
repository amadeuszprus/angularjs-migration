(function() {
  'use strict';
  
  angular
    .module('productCatalog')
    .controller('AppController', AppController);
  
  AppController.$inject = ['$rootScope', '$location'];
  
  function AppController($rootScope, $location) {
    var vm = this;
    
    // Search query property
    vm.searchQuery = '';
    
    // Watch for changes to search query and broadcast
    $rootScope.$watch(function() {
      return vm.searchQuery;
    }, function(newValue) {
      $rootScope.$broadcast('searchQueryChanged', newValue);
    });
    
    // Navigate to home
    vm.goHome = function() {
      $location.path('/');
    };
  }
})();