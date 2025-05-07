(function () {
  "use strict";
  angular.module("productCatalog", [
    "ngAria",
    "ngAnimate",
    "ngMaterial",
    "ngRoute",
    "ngSanitize",
    "ngMessages",
    "ngAnimate",
  ]); // Then configure the module in a separate step
  angular.module("productCatalog").config(configApp);

  // Inject services using array notation to avoid minification issues
  configApp.$inject = ["$routeProvider", "$mdThemingProvider"];

  function configApp($routeProvider, $mdThemingProvider) {
    // Configure routes
    $routeProvider
      .when("/", {
        templateUrl: "src/templates/product-list.html",
        controller: "ProductListController",
        controllerAs: "productList",
      })
      .when("/product/:id", {
        templateUrl: "src/templates/product-detail.html",
        controller: "ProductDetailController",
        controllerAs: "productDetail",
      })
      .otherwise({
        redirectTo: "/",
      });

    $mdThemingProvider
      .theme("default")
      .primaryPalette("blue")
      .accentPalette("orange");
  }
})();
