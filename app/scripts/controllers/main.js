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
			zoom: 13
		};

		$scope.createStation = function(id, name, latitude, longitude) {
			return {
				id: id,
				name: id + '. ' + name,
				options: {
					draggable: false,
					title: this.name,
					labelAnchor: '10 39',
					labelContent: name,
					labelClass: 'labelMarker'
				},
				latitude: latitude,
				longitude: longitude
			};
		};

		$scope.stations = [
			$scope.createStation(0, 'Inicio', 25.67275, -100.30787),
			$scope.createStation(1, 'Palacio de Gobierno', 25.67257, -100.30922),
			$scope.createStation(2, 'Congreso del Estado', 25.66916, -100.31087)
		];

		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];



	});