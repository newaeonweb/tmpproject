/*!
* conta-azul - v0.0.1 - MIT LICENSE 2017-04-02. 
* @author Fernando
*/
(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('conta-azul', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		'smart-table',
		'ngMessages',
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('conta-azul')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
		$urlRouterProvider
			.otherwise('/');
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('conta-azul')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '/',
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			});
			
	}]);

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('conta-azul')
		.controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['homeService', '$timeout', '$uibModal'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function HomeCtrl(homeService, $timeout, $uibModal) {
		/*jshint validthis: true */
		var vm = this;
		// Get Fleets list from service, using timeout just to simulate a 650ms request from a real service
		$timeout(function() {

			vm.listFleets = homeService.getFleetsList();

		}, 650);



		vm.addNewCar = function () {
            var ModalAddCar = $uibModal.open({
                templateUrl: '/app/modules/partials/modal-addCar.html',
                controller: ModalAddCarCtrl,
                controllerAs: '$ctrl',
                size: 'lg'
            });

            ModalAddCar.result.then(function (response) {
                // Get result promisse from ok(response) function
                vm.listFleets.push(response);

            }, function () {
                // just close the modal window
            });

            // Function to emulate modal controller
            function ModalAddCarCtrl ($uibModalInstance) {
                var $ctrl = this;

                // Mock objects to pass to Modal Window
                $ctrl.car = {};

                // ng-click to save data
                $ctrl.ok = function () {
                    $uibModalInstance.close($ctrl.car);
                };
                // ng-click to close modal window
                $ctrl.cancel = function () {
                    $uibModalInstance.dismiss();
                };

            }

        }


	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:NavBarCtrl
	* @description
	* # NavBarCtrl
	* Controller of the app
	*/

	angular
		.module('conta-azul')
		.controller('NavBarCtrl', NavBar);

	NavBar.$inject = ['homeService', 'MenuService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function NavBar(homeService, MenuService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "conta-azul";

		vm.menu = MenuService.listMenu();

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('conta-azul')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {
		// Simulate a service request
		var list = [
			{
				"combustivel": "Flex",
				"imagem": null,
				"marca": "Volkswagem",
				"modelo": "Gol",
				"placa": "FFF-5498",
				"valor": "20000"
			}, {
				"combustivel": "Gasolina",
				"imagem": null,
				"marca": "Volkswagem",
				"modelo": "Fox",
				"placa": "FOX-4125",
				"valor": "20000"
			}, {
				"combustivel": "Alcool",
				"imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
				"marca": "Volkswagen",
				"modelo": "Fusca",
				"placa": "PAI-4121",
				"valor": "20000"
			}
		];

		return {
			getFleetsList: getFleetsList
		};

		function getFleetsList() {
			return list;
		}

	}

})();

'use strict';

(function () {

	/**
	* @ngdoc function
	* @name app.service:menuService
	* @description
	* # menuService
	* Service of the app
	*/

	angular
		.module('conta-azul')
		.factory('MenuService', Menu);

	// Inject your dependencies as .$inject = ['$http', '$anotherDependency'];
	// function Name ($http, $anotherDependency) {...}

	Menu.$inject = ['$http'];

	function Menu($http) {
		// Sample code.

		var menu = [
			{
				link: '.',
				name: 'This is a Placeholder menu. It disappears when the first module has been created.'
			}
		];

		return {
			listMenu: function () {
				return menu;
			}
		}

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.directive:navbarDirective
	* @description
	* # navbarDirective
	* Directive of the app
	*/

	angular
		.module('conta-azul')
		.directive('navBar', navBar);

	function navBar() {

		var directive = {
			link: link,
			restrict: 'EA',
			scope: {
				menus: '=',
				brand: '='
			},
			controller: control,
			templateUrl: 'app/modules/layouts/nav-bar/navbar-tpl.html'

		};

		return directive;

		function link(scope, element, attrs, $location) {
			// write your code here
			scope.defaults = {
				brand: '',
				menus: [],
				search: {
					show: false
				}
			}; // end defaults

		}

		function control($scope, $location) {

			$scope.isActive = function (path) {
				var currentPath = $location.path().split('/')[1];
				if (currentPath.indexOf('?') !== -1) {
					currentPath = currentPath.split('?')[0];
				}
				return currentPath === path.split('/')[1];
			};
		}

	}

})();
