(function () {
  "use strict";

  angular
    .module("productCatalog")
    .controller("ProductDetailController", ProductDetailController);

  ProductDetailController.$inject = [
    "$routeParams",
    "$location",
    "ProductService",
  ];

  function ProductDetailController($routeParams, $location, ProductService) {
    var vm = this;

    // Controller properties
    vm.product = null;
    vm.loading = true;
    vm.productId = $routeParams.id;

    // Controller methods
    vm.goBack = goBack;

    // Initialize controller
    activate();

    // Implementation
    function activate() {
      // Load product details
      ProductService.getProductById(vm.productId).then(function (product) {
        vm.product = product;
        vm.loading = false;
      });
    }

    function goBack() {
      $location.path("/");
    }
  }
})();
