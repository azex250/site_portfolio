angular.module("portfolio", [ "ngAnimate", "ngRoute", "services", "controllers"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "mainController",
            templateUrl: "main_page.html"
        })
        .otherwise({
            redirectTo: '/'
        })
}]);