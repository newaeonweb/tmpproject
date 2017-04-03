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

	HomeCtrl.$inject = ['homeService', '$uibModal'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function HomeCtrl(homeService, $uibModal) {
		/*jshint validthis: true */
		var vm = this;
		// Get Fleets list from service.
        vm.listFleets = homeService.getFleetsList();

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

        };
	}

})();
