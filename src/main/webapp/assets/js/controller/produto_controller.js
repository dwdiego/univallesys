'use strict';

angular.module('univallesys').controller('ProdutoController', ['$scope', 'ProdutoService', function($scope, ProdutoService) {
    var self = this;
    self.produto={codigo:null,nome:'',preco:null,dataDaCompra:''};
    self.produtos=[];
    
    self.date = new Date();

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;


    fetchAllProdutos();

    function fetchAllProdutos(){
        ProdutoService.fetchAllProdutos()
            .then(
            function(d) {
                self.produtos = d;
            },
            function(errResponse){
                console.error('Error while fetching Produtos');
            }
        );
    }

    function createProduto(produto){
    	produto.dataDaCompra = self.date;
    	console.log(produto);
        ProdutoService.createProduto(produto)
            .then(
            fetchAllProdutos,
            function(errResponse){
                console.error('Error while creating Produto');
            }
        );
    }

    function updateProduto(produto, codigo){
        ProdutoService.updateProduto(produto, codigo)
            .then(
            fetchAllProdutos,
            function(errResponse){
                console.error('Error while updating Produtos');
            }
        );
    }

    function deleteProduto(codigo){
        ProdutoService.deleteProduto(codigo)
            .then(
            fetchAllProdutos,
            function(errResponse){
                console.error('Error while deleting Produto');
            }
        );
    }

    function submit() {
        if(self.produto.codigo===null){
            console.log('Saving New Produto', self.produto);
            createProduto(self.produto);
        }else{
            updateProduto(self.produto, self.produto.codigo);
            console.log('Produto updated with codigo ', self.produto.codigo);
        }
        reset();
    }

    function edit(codigo){
        console.log('codigo to be edited', codigo);
        for(var i = 0; i < self.produtos.length; i++){
            if(self.produtos[i].codigo === codigo) {
                self.produto = angular.copy(self.produtos[i]);
                break;
            }
        }
    }

    function remove(codigo){
        console.log('codigo to be deleted', codigo);
        if(self.produto.codigo === codigo) {//clean form if the produto to be deleted is shown there.
            reset();
        }
        deleteProduto(codigo);
    }


    function reset(){
        self.produto={codigo:null,nome:'',preco:null,dataDaCompra:''};
        $scope.myForm.$setPristine(); //reset Form
    }

}]);
