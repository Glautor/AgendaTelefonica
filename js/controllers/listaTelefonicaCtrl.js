angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter){
	$scope.app = 'Lista Telefônica';
	$scope.contatos = [
		{nome: $filter("uppercase")("Pedro"), telefone: "999999999", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
		{nome: $filter("uppercase")("Ana"), telefone: "999999988", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}},
		{nome: $filter("uppercase")("Maria"), telefone: "999999977", data: new Date(), operadora: {nome: "GVT", codigo: 25, categoria: "Fixo"}},
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
		{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
		{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
		{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
		{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
	];
	$scope.adicionarContato = function(contato){
		$scope.contatos.push(contato);
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};
	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatosSelecionados = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	}
	$scope.isContatoSelecionado = function (contatos){
		return contatos.some(function (contato){
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
});