angular.module("controllers",[])

.controller("title", ["$scope", "$location", function($scope, $location) {
	$scope.openMainPage = function() {
		$location.patch('/');
	}
}])

.controller("general", ["$scope", function($scope) {
    
}])

.controller("mainController", ["$scope", function($scope) {
    
}])

.controller("slideController", ["$scope", "menuManager", function($scope, menuManager) {
    $scope.config = {
    	is_open: false,
    	top_menu: menuManager.getTopMenu()
    };
}])

;