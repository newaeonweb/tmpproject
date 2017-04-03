angular.module('conta-azul').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/modules/home/home.html',
    "<div class=\"container\">\n" +
    "	<br>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-sm-6 col-lg-6\">\n" +
    "			<button type=\"button\" class=\"btn btn-success\" ng-click=\"vm.addNewCar()\">Novo Carro</button>\n" +
    "		</div>\n" +
    "		<div class=\"col-sm-6 col-lg-6\">\n" +
    "			<div class=\"input-group\">\n" +
    "				<input type=\"text\" class=\"form-control\" placeholder=\"Pesquisar\" >\n" +
    "				<span class=\"input-group-btn\">\n" +
    "        		<button class=\"btn btn-default\" type=\"button\"><i class=\"glyphicon glyphicon-search\"></i></button>\n" +
    "      </span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<br>\n" +
    "	<div class=\"row\">\n" +
    "		<uib-progressbar value=\"88\" ng-hide=\"vm.listFleets\"></uib-progressbar>\n" +
    "		<div class=\"\" ng-show=\"vm.listFleets\">\n" +
    "			<table st-table=\"vm.listFleets\" class=\"table table-striped\">\n" +
    "				<thead>\n" +
    "				<tr>\n" +
    "					<th><input type=\"checkbox\"></th>\n" +
    "					<th>Placa</th>\n" +
    "					<th>Modelo</th>\n" +
    "					<th>Marca</th>\n" +
    "					<th>Foto</th>\n" +
    "					<th>Combustível</th>\n" +
    "					<th>Valor</th>\n" +
    "				</tr>\n" +
    "				</thead>\n" +
    "				<tbody>\n" +
    "				<tr ng-repeat=\"row in vm.listFleets\">\n" +
    "					<td><input type=\"checkbox\"></td>\n" +
    "					<td>{{row.placa}}</td>\n" +
    "					<td>{{row.modelo}}</td>\n" +
    "					<td>{{row.marca}}</td>\n" +
    "					<td>\n" +
    "						<span ng-show=\"row.imagem\"><a ng-href=\"{{row.imagem}}\">Imagem</a></span>\n" +
    "						<span ng-hide=\"row.imagem\">Sem Foto</span>\n" +
    "					</td>\n" +
    "					<td>{{row.combustivel}}</td>\n" +
    "					<td>{{row.valor | currency:\"R$ \":00}}</td>\n" +
    "				</tr>\n" +
    "				</tbody>\n" +
    "				<tfoot>\n" +
    "				<tr>\n" +
    "					<td colspan=\"7\" class=\"text-center\">\n" +
    "						<div st-pagination=\"\" st-items-by-page=\"1\" st-displayed-pages=\"7\"></div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "				</tfoot>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<!--3216EA-->\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar-tpl.html',
    "<nav class=\"navbar navbar-inverse\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n" +
    "				<span class=\"sr-only\">Toggle navigation</span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "				<span class=\"icon-bar\"></span>\n" +
    "			</button>\n" +
    "			<a class=\"navbar-brand\" href=\"/#!/\"><i class=\"icon-logo_contaazul\"></i></a>\n" +
    "		</div>\n" +
    "		<!--<div id=\"navbar\" class=\"collapse navbar-collapse\">-->\n" +
    "			<!--<ul class=\"nav navbar-nav\">-->\n" +
    "				<!--<li ng-repeat=\"item in menus\" ng-class=\"{active:isActive('#/' + item.link)}\">-->\n" +
    "					<!--<a ui-sref=\"{{ item.link }}\">{{ item.name }}</a>-->\n" +
    "				<!--</li>-->\n" +
    "			<!--</ul>-->\n" +
    "		<!--</div>-->\n" +
    "	</div>\n" +
    "</nav>\n"
  );


  $templateCache.put('app/modules/layouts/nav-bar/navbar.html',
    "<div ng-controller=\"NavBarCtrl as vm\">\n" +
    "    <nav-bar menus=\"vm.menu\" brand=\"vm.title\"></nav-bar>\n" +
    "</div>\n"
  );


  $templateCache.put('app/modules/partials/modal-addCar.html',
    "\n" +
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\" id=\"modal-title\">Adicionar Veiculo</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" id=\"modal-body\">\n" +
    "    <form name=\"addCarForm\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"modelo\">Modelo</label>\n" +
    "            <input type=\"text\" name=\"modelo\" ng-model=\"$ctrl.car.modelo\" class=\"form-control\" id=\"modelo\" placeholder=\"Modelo do Veiculo\" required>\n" +
    "            <div ng-messages=\"addCarForm.modelo.$error\">\n" +
    "                <div ng-message=\"required\">Campo Obrigatório</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"marca\">Marca</label>\n" +
    "            <input type=\"text\" ng-model=\"$ctrl.car.marca\" class=\"form-control\" id=\"marca\" placeholder=\"Marca\" required>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"foto\">Foto</label>\n" +
    "            <input type=\"text\" ng-model=\"$ctrl.car.foto\" class=\"form-control\" id=\"foto\" placeholder=\"Ex: www.meusite.com/minha-imagem.jpg\">\n" +
    "            <p class=\"help-block\">Adicione a url para imagem.</p>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"combustivel\">Combustível</label>\n" +
    "            <select ng-model=\"$ctrl.car.combustivel\" class=\"form-control\" id=\"combustivel\">\n" +
    "                <option>Selecione o tipo de combustível</option>\n" +
    "                <option value=\"Flex\">Flex</option>\n" +
    "                <option value=\"Gasolina\">Gasolina</option>\n" +
    "                <option value=\"Alcool\">Alcool</option>\n" +
    "            </select>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"placa\">Placa</label>\n" +
    "            <input type=\"text\" ng-model=\"$ctrl.car.placa\" class=\"form-control\" id=\"placa\" required>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label for=\"valor\">valor</label>\n" +
    "            <input type=\"text\" ng-model=\"$ctrl.car.valor\" class=\"form-control\" id=\"valor\">\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"$ctrl.cancel()\">Cancel</button>\n" +
    "    <button class=\"btn btn-success\" type=\"button\" ng-click=\"$ctrl.ok()\" ng-disabled=\"addCarForm.$invalid\">Salvar</button>\n" +
    "</div>"
  );

}]);
