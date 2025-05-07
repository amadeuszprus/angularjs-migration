(function() {
  'use strict';
  
  angular
    .module('productCatalog')
    .factory('CategoryService', CategoryService);
  
  CategoryService.$inject = ['$q', 'ProductService'];
  
  function CategoryService($q, ProductService) {
    // Service interface
    var service = {
      getCategories: getCategories
    };
    
    return service;
    
    // Implementation
    function getCategories() {
      return $q(function(resolve) {
        ProductService.getProducts().then(function(products) {
          var categories = [];
          var categorySet = {};
          
          // Extract unique categories
          products.forEach(function(product) {
            if (!categorySet[product.category]) {
              categorySet[product.category] = true;
              categories.push(product.category);
            }
          });
          
          // Sort categories alphabetically
          categories.sort();
          
          resolve(categories);
        });
      });
    }
  }
})();