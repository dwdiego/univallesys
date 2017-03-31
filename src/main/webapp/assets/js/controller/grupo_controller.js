'use strict';

angular.module('univallesys').controller('GrupoController', ['$scope', 'GrupoService', function($scope, GrupoService) {
    var self = this;
    self.grupo={id:null,company_id:'',product_group_id:''};
    self.grupos=[];

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;


    fetchAllGrupos();

    function fetchAllGrupos(){
        GrupoService.fetchAllGrupos()
            .then(
            function(d) {
                self.grupos = d;
            },
            function(errResponse){
                console.error('Error while fetching Grupos');
            }
        );
    }

    function createGrupo(grupo){
        GrupoService.createGrupo(grupo)
            .then(
            fetchAllGrupos,
            function(errResponse){
                console.error('Error while creating Grupo');
            }
        );
    }

    function updateGrupo(grupo, id){
        GrupoService.updateGrupo(grupo, id)
            .then(
            fetchAllGrupos,
            function(errResponse){
                console.error('Error while updating Grupos');
            }
        );
    }

    function deleteGrupo(id){
        GrupoService.deleteGrupo(id)
            .then(
            fetchAllGrupos,
            function(errResponse){
                console.error('Error while deleting Grupo');
            }
        );
    }

    function submit() {
        if(self.grupo.id===null){
            console.log('Saving New Grupo', self.grupo);
            createGrupo(self.grupo);
        }else{
            updateGrupo(self.grupo, self.grupo.id);
            console.log('Grupo updated with id ', self.grupo.id);
        }
        reset();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.grupos.length; i++){
            if(self.grupos[i].id === id) {
                self.grupo = angular.copy(self.grupos[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.grupo.id === id) {//clean form if the grupo to be deleted is shown there.
            reset();
        }
        deleteGrupo(id);
    }


    function reset(){
        self.grupo={id:null,company_id:'',product_group_id:''};
        $scope.myFormGrupo.$setPristine(); //reset Form
    }

}]);
