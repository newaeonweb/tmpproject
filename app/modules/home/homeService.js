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

	homeService.$inject = [];

	function homeService() {
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
            }, {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }, {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }, {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }, {
                "combustivel": "Gasolina",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Fox",
                "placa": "FOX-4125",
                "valor": "20000"
            }, {
                "combustivel": "Gasolina",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Fox",
                "placa": "FOX-4125",
                "valor": "20000"
            }, {
                "combustivel": "Gasolina",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Fox",
                "placa": "FOX-4125",
                "valor": "20000"
            }, {
                "combustivel": "Gasolina",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Fox",
                "placa": "FOX-4125",
                "valor": "20000"
            }, {
                "combustivel": "Gasolina",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Fox",
                "placa": "FOX-4125",
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
            }, {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }, {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }, {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }, {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }, {
                "combustivel": "Alcool",
                "imagem": "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
                "marca": "Volkswagen",
                "modelo": "Fusca",
                "placa": "PAI-4121",
                "valor": "20000"
            }, {
                "combustivel": "Gasolina",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Fox",
                "placa": "FOX-4125",
                "valor": "20000"
            }, {
                "combustivel": "Gasolina",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Fox",
                "placa": "FOX-4125",
                "valor": "20000"
            }, {
                "combustivel": "Gasolina",
                "imagem": null,
                "marca": "Volkswagem",
                "modelo": "Fox",
                "placa": "FOX-4125",
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
