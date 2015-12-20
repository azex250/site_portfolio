angular.module("directives",[])

.directive('bgSwitcher', function() {
	var url = './img/';
	var bg_map = {
		main: 'bg.jpg',
		price: 'bg_price.jpg',
		portfolio: 'bg_portfolio.jpg',
		contacts: 'bg_contacts.jpg'
	};

	return {
		link: function(scope, el, attr) {
			scope.$on('bg_switch', function(context, id) {
				var name = bg_map[id] ? bg_map[id] : bg_map['main'];
				el.css('background-image', 'url(' + url + bg_map[id] + ')');
			});
		}
	};
});