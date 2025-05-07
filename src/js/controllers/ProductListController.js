(function() {
  'use strict';
  
  angular
    .module('productCatalog')
    .controller('ProductListController', ProductListController);
  
  ProductListController.$inject = ['$scope', '$location', 'ProductService', 'CategoryService'];
  
  function ProductListController($scope, $location, ProductService, CategoryService) {
    var vm = this;
    
    // Controller properties
    vm.products = [];
    vm.categories = [];
    vm.selectedCategory = 'all';
    vm.searchQuery = '';
    vm.loading = true;
    
    // Controller methods
    vm.selectCategory = selectCategory;
    vm.viewProductDetails = viewProductDetails;
    vm.filterByCategory = filterByCategory;
    vm.filterBySearch = filterBySearch;
    
    // Initialize controller
    activate();
    
    // Implementation
    function activate() {
      // Load products
      ProductService.getProducts().then(function(products) {
        vm.products = products;
        vm.loading = false;
      });
      
      // Load categories
      CategoryService.getCategories().then(function(categories) {
        vm.categories = categories;
      });
      
      // Listen for search query changes
      $scope.$on('searchQueryChanged', function(event, searchQuery) {
        vm.searchQuery = searchQuery;
      });
    }
    
    function selectCategory(category) {
      vm.selectedCategory = category;
    }
    
    function viewProductDetails(productId) {
      $location.path('/product/' + productId);
    }
    
    function filterByCategory(product) {
      return vm.selectedCategory === 'all' || product.category === vm.selectedCategory;
    }
    
    function filterBySearch(product) {
      if (!vm.searchQuery) {
        return true;
      }
      
      var searchQuery = vm.searchQuery.toLowerCase();
      return product.name.toLowerCase().indexOf(searchQuery) !== -1 ||
             product.description.toLowerCase().indexOf(searchQuery) !== -1;
    }
  }
})();