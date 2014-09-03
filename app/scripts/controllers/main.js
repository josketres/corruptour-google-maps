'use strict';

/**
 * @ngdoc function
 * @name corruptourMtyMapaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the corruptourMtyMapaApp
 */
angular.module('corruptourMtyMapaApp')
	.controller('MainCtrl', function($scope) {

		// see http://dbsgeo.com/latlon/
		$scope.map = {
			center: {
				latitude: 25.67161,
				longitude: -100.31976
			},
			zoom: 13,
			options: {
				scrollwheel: true
			},
			draggable: true
		};

		$scope.createStation = function(id, name, latitude, longitude) {
			return {
				id: id,
				name: id + '. ' + name,
				options: {
					draggable: false,
					title: name,
					labelAnchor: '10 39',
					labelContent: id + '',
					labelClass: 'labelMarker'
				},
				latitude: latitude,
				longitude: longitude
			};
		};

		$scope.stations = [
			$scope.createStation(0, 'Inicio', 25.67275, -100.30787),
			$scope.createStation(1, 'Palacio de Gobierno', 25.67257, -100.30922),
			$scope.createStation(2, 'Congreso del Estado', 25.66916, -100.31087),
			$scope.createStation(3, 'Palacio Municipal Monterrey', 25.66477, -100.31077),
			$scope.createStation(4, 'Barrio Antiguo', 25.66493, -100.30792),
			$scope.createStation(5, 'Infonabit', 25.66860, -100.31065),
			$scope.createStation(6, 'Torre VIP', 25.67573, -100.29225),
			$scope.createStation(7, 'Parque Fundidora', 25.68232, -100.28655),
			$scope.createStation(8, 'Par Vial', 25.66782, -100.33429),
			$scope.createStation(9, 'Casino Royale', 25.674156, -100.354931),
			$scope.createStation(10, 'Rio Santa Catarina', 25.66817, -100.34156),
			$scope.createStation(11, 'Rio Santa Catarina', 25.67193, -100.31938),
		];

		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];



	});