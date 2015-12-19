angular.module("services",[])

.factory("menuManager", [function() {
	var top_menu = [
		{
			name: "ГЛАВНАЯ",
			is_active: true,
			href: "#/"

		},
		{
			name: "ПОРТФОЛИО",
			is_active: false,
			href: "#/"

		},
		{
			name: "КОНТАКТЫ",
			is_active: false,
			href: "#/"

		},
		{
			name: "ПРАЙС",
			is_active: false,
			href: "#/"

		}
	];

    return {
    	getTopMenu: function() {
    		return top_menu;
    	}
    }
}])

.factory("dummyManager", ['$http', '$q', function($http, $q) {}])
;
