(function() {
  'use strict';
  
  angular
    .module('productCatalog')
    .filter('searchFilter', searchFilter);
  
  function searchFilter() {
    return function(products, searchQuery) {
      if (!products || !searchQuery) {
        return products;
      }
      
      var query = searchQuery.toLowerCase();
      
      return products.filter(function(product) {
        return product.name.toLowerCase().indexOf(query) !== -1 || 
               product.description.toLowerCase().indexOf(query) !== -1 ||
               product.category.toLowerCase().indexOf(query) !== -1;
      });
    };
  }
})();