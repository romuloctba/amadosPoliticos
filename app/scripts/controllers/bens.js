'use strict';

/**
 * @ngdoc function
 * @name transpAppApp.controller:BensctrlCtrl
 * @description
 * # BensctrlCtrl
 * Controller of the transpAppApp
 */
angular.module('transpAppApp')
  .controller('BensctrlCtrl', function ($scope, $routeParams, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.oId = $routeParams.id;
    var id = $scope.oId;
    var theUrl = 'http://api.transparencia.org.br/api/v1/candidatos/'+id;
    	$http.get(theUrl).success(function(data, status, headers, config) {
    	$scope.candidato = data;
    }) .error(function(data, status, header, config){
          alert('ERRO. Melhor voltar a página anterior.....')
        });;
    	$http.get(theUrl+'/bens').success(function(data, status, headers, config) {
    	$scope.bens = data;
    }) .error(function(data, status, header, config){
          alert('ERRO :( Tente atualizar a página');
        });;
    	$http.get(theUrl+'/doadores').success(function(data, status, headers, config) {
    	$scope.doadores = data;
    }) .error(function(data, status, header, config){
          alert('Erro: É tanta grana que travei :(')
        });;

  });
