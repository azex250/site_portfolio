angular.module("portfolio", [ "ngAnimate", "ngRoute", "services", "controllers", "directives"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "mainController",
            templateUrl: "main_page.html"
        })
        .when('/price', {
            controller: "priceController",
            templateUrl: "main_page.html"
        })
        .when('/portfolio', {
            controller: "portfolioController",
            templateUrl: "main_page.html"
        })
        .when('/contacts', {
            controller: "contactsController",
            templateUrl: "main_page.html"
        })
        .otherwise({
            redirectTo: '/'
        })
}]);