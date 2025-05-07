(function() {
  'use strict';
  
  angular
    .module('productCatalog')
    .filter('categoryFilter', categoryFilter);
  
  function categoryFilter() {
    return function(products, category) {
      if (!products || !category || category === 'all') {
        return products;
      }
      
      return products.filter(function(product) {
        return product.category === category;
      });
    };
  }
})();