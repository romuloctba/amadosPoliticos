'use strict';

/**
 * @ngdoc function
 * @name transpAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the transpAppApp
 */
angular.module('transpAppApp')
  .controller('AboutCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.lista = function(estado, cargo){
	    var estado = $scope.estado;
	    var cargo = $scope.cargo;
	    
    	console.log('estado: ', estado);
    	console.log('cargo: ', cargo);
    	var theUrl = 'http://api.transparencia.org.br/api/v1/candidatos?estado='+estado+'&cargo='+ cargo;
    	$http.get(theUrl).success(function(data, status, headers, config) {
    	$scope.data = data;
    	$scope.url = theUrl;
    });
    } //fim lista(estado, cargo);
  });

