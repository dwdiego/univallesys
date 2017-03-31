'use strict';

angular.module('univallesys').factory('ProdutoService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = 'http://localhost:8080/univallesys/produtos';
    var REST_SERVICE_URI_FULL = 'http://localhost:8080/univallesys/produto';

    var factory = {
        fetchAllProdutos: fetchAllProdutos,
        createProduto: createProduto,
        updateProduto:updateProduto,
        deleteProduto:deleteProduto
    };

    return factory;

    function fetchAllProdutos() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Produtos');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function createProduto(produto) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI_FULL, produto)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating Produto');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateProduto(produto, codigo) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI_FULL+'/'+codigo, produto)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating Produto');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deleteProduto(codigo) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI_FULL+'/'+codigo)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting Produto');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);
