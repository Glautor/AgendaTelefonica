angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter){
	$scope.app = 'Lista Telefônica';
	$scope.contatos = [
		{nome: "Pedro", telefone: "999999999", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
		{nome: "Ana", telefone: "999999988", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}},
		{nome: "Maria", telefone: "999999977", data: new Date(), operadora: {nome: "GVT", codigo: 25, categoria: "Fixo"}},
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
		{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
		{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
		{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
		{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
	];
	var limiteNosNomes = function(contatos){
		contatos.forEach(function (contato){
			if (contato.nome.length > 4){
				contato.nomeComLimite = contato.nome.substring(0,5) + '...';
			} else {
				contato.nomeComLimite = contato.nome;
			}
		});
	};
	$scope.adicionarContato = function(contato){
		$scope.contatos.push(contato);
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
		limiteNosNomes($scope.contatos);
	};
	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatosSelecionados = contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos){
		return contatos.some(function (contato){
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	limiteNosNomes($scope.contatos);
});