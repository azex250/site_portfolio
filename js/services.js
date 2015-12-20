angular.module("services",[])

.factory("menuManager", [function() {
	var top_menu = [
		{
			name: "ГЛАВНАЯ",
			is_active: true,
			href: "#/",
			id: "main"
		},
		{
			name: "ПОРТФОЛИО",
			is_active: false,
			href: "#/portfolio",
			id: "portfolio"

		},
		{
			name: "КОНТАКТЫ",
			is_active: false,
			href: "#/contacts",
			id: "contacts"

		},
		{
			name: "ПРАЙС",
			is_active: false,
			href: "#/price",
			id: "price"
		}
	];

    var api = {
    	getTopMenu: function() {
    		return top_menu;
    	},

    	setTopMenu: function(id) {
    		var is_catch = false;

    		for (var i in top_menu) {
    			if (top_menu[i].id === id) {
    				is_catch = true;
    				top_menu[i].is_active = true;
    			} else {
    				top_menu[i].is_active = false;
    			}
    		}

    		if (!is_catch) {
    			api.setTopMenu('main');
    		}
    	}
    };

    return api;
}])

.factory("dummyManager", ['$http', '$q', function($http, $q) {}])
;
