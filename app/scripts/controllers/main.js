'use strict';

/**
 * @ngdoc function
 * @name corruptourMtyMapaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the corruptourMtyMapaApp
 */
angular.module('corruptourMtyMapaApp')
  .controller('MainCtrl', function ($scope) {

  	// see http://dbsgeo.com/latlon/
	$scope.map = {
	    center: {

	        latitude: 25.66906,
	        longitude: -100.35105
	    },
	    zoom: 14
	};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
