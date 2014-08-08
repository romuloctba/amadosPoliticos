'use strict';

/**
 * @ngdoc function
 * @name transpAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the transpAppApp
 */
angular.module('transpAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      $scope.limit = 20;
      $scope.offset = 0;
      
    $scope.lista = function(estado, cargo, offset, limit){
	    var estado = $scope.estado;
	    var cargo = $scope.cargo;
	    var offset = $scope.offset;
      var limit = $scope.limit; //maximo da busca, pra não pesar
      $scope.loading = true;
       //só inicializando mesmo, será alterado dpoes
    	console.log('estado: ', estado);
    	console.log('cargo: ', cargo);
    	var theUrl = 'http://api.transparencia.org.br/api/v1/candidatos?estado='+estado+'&cargo='+cargo+'&_offset='+offset+'&_limit='+limit;
    	$http.get(theUrl)
        .success(function(data, status, headers, config) {
    	$scope.loading = false;
      if(data){
      $scope.data = data;
      $scope.message = [];
    } if (data == ""){
      $scope.message = {
        classe:"success",
        text: "Sem resultados por estes parâmetros. Tente outra busca"
      };
    }
    	$scope.url = theUrl;
      })
        .error(function(data, status, header, config){
          alert('ERRO. Vc preencheu estado e cargo?');
          $scope.loading = false;
        });
    } //fim lista(estado, cargo);
    $scope.proxima = function(){
      var proxima = $scope.offset+$scope.limit-1;
      $scope.offset = proxima;
      $scope.lista($scope.estado, $scope.cargo, $scope.offset*$scope.limit, $scope.limit);
    } //fim proxima();
  });
