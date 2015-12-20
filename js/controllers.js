angular.module("controllers",[])

.controller("title", ["$scope", function($scope) {

}])

.controller("general", ["$scope", "$location", function($scope, $location) {
	$scope.openMainPage = function() {
		$location.path('/');
	}

}])

.controller("mainController", ["$scope", "menuManager", function($scope, menuManager) {
    $scope.$emit("bg_switch", 'main');
	menuManager.setTopMenu('main');

}])

.controller("priceController", ["$scope", "menuManager", function($scope, menuManager) {
	$scope.$emit("bg_switch", 'price');
	menuManager.setTopMenu('price');
}])

.controller("contactsController", ["$scope", "menuManager", function($scope, menuManager) {
	$scope.$emit("bg_switch", 'contacts');
	menuManager.setTopMenu('contacts');
}])

.controller("portfolioController", ["$scope", "menuManager", function($scope, menuManager) {
	$scope.$emit("bg_switch", 'portfolio');
	menuManager.setTopMenu('portfolio');
}])

.controller("slideController", ["$scope", "menuManager", function($scope, menuManager) {
    $scope.config = {
    	is_closed: false,
    	top_menu: menuManager.getTopMenu()
    };

    $scope.toggleSlider = function() {
    	$scope.config.is_closed = !$scope.config.is_closed;
    };
}])

;