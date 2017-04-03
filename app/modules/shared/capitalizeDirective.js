(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name app.directive:Capitalize
     * @description
     * # Capitalize
     * Directive of the app
     */

    angular
        .module('conta-azul')
        .directive('capitalize', Capitalize);

    Capitalize.$inject = [];

    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */

    function Capitalize() {

        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                var capitalize = function(inputValue) {
                    if (inputValue === undefined) {
                        inputValue = '';
                    }
                    var capitalized = inputValue.toUpperCase();
                    if (capitalized !== inputValue) {
                        modelCtrl.$setViewValue(capitalized);
                        modelCtrl.$render();
                    }
                    return capitalized;
                };
                modelCtrl.$parsers.push(capitalize);
                capitalize(scope[attrs.ngModel]);
            }
        };

    }

})();
