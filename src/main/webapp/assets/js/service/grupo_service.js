'use strict';

angular.module('univallesys').factory('GrupoService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = 'http://localhost:8080/univallesys/gruposprodutos';
    var REST_SERVICE_URI_FULL = 'http://localhost:8080/univallesys/grupoproduto';

    var factory = {
        fetchAllGrupos: fetchAllGrupos,
        createGrupo: createGrupo,
        updateGrupo:updateGrupo,
        deleteGrupo:deleteGrupo
    };

    return factory;

    function fetchAllGrupos() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching Grupos');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function createGrupo(grupo) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI_FULL, grupo)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating Grupo');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateGrupo(grupo, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI_FULL+'/'+id, grupo)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating Grupo');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deleteGrupo(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI_FULL+'/'+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting Grupo');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);
