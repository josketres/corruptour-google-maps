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

			var station = {
				id: id,
				name: id + '. ' + name,
				options: {
					draggable: false,
					title: name,
					labelAnchor: '10 39',
					labelContent: id + '',
					labelClass: 'labelMarker',
					anchorPoint: google.maps.Point(40, 40)
				},
				latitude: latitude,
				longitude: longitude,
				show: false,
				onClick: function() {
					$scope.hideAllStationsWindows();
					station.show = true;
				}
			};
			return station;
		};

		$scope.hideAllStationsWindows = function() {
			angular.forEach($scope.stations, function(value, key) {
				value.show = false;
			});
		};

		$scope.stations = [
			$scope.createStation(0, 'Inicio', 25.67275, -100.30787),
			$scope.createStation(1, 'Palacio de Gobierno', 25.67257, -100.30922), // 1 first to 
			$scope.createStation(2, 'Congreso del Estado', 25.66916, -100.31087),
			$scope.createStation(3, 'Palacio Municipal Monterrey', 25.66477, -100.31077),
			$scope.createStation(4, 'Barrio Antiguo', 25.66493, -100.30792),
			$scope.createStation(5, 'Infonabit', 25.66860, -100.31065),
			$scope.createStation(6, 'Torre VIP', 25.67573, -100.29225),
			$scope.createStation(7, 'Parque Fundidora', 25.68232, -100.28655),
			$scope.createStation(8, 'Par Vial', 25.66782, -100.33429),
			$scope.createStation(9, 'Casino Royale', 25.674156, -100.354931),
			$scope.createStation(10, 'Isssteleon', 25.66817, -100.34156),
			$scope.createStation(11, 'Rio Santa Catarina', 25.67193, -100.31938),
		];

		$scope.stations[0].show = true;

		$scope.createPath = function(latitude, longitude) {
			return {
				latitude: latitude,
				longitude: longitude
			};
		};

		$scope.route = {
			path: [
				$scope.createPath(25.672729488768493, -100.30789875774644),
				$scope.createPath(25.673773814064106, -100.30764126568101),
				$scope.createPath(25.674083242024125, -100.3109886625316),
				$scope.createPath(25.673135616359602, -100.31111740856431),
				$scope.createPath(25.672922883032086, -100.30976557522081),
				$scope.createPath(25.66452928331333, -100.31131052761339),
				$scope.createPath(25.664239171375716, -100.31122469692491),
				$scope.createPath(25.664123126403027, -100.31107449322008),
				$scope.createPath(25.664142467239664, -100.31085991649888),
				$scope.createPath(25.664200489730714, -100.31060242443345),
				$scope.createPath(25.665457636770462, -100.31021618633531),
				$scope.createPath(25.66517524707723, -100.31030370733663),
				$scope.createPath(25.66452928331333, -100.30579590587877),
				$scope.createPath(25.664103785563288, -100.30628943233751),
				$scope.createPath(25.66356224077638, -100.30766272335313),
				$scope.createPath(25.663542899845652, -100.30929350643419),
				$scope.createPath(25.663774990807404, -100.31025910167955),
				$scope.createPath(25.664200489730714, -100.31055950908922),
				$scope.createPath(25.668668136753222, -100.30955099849962),
				$scope.createPath(25.66851341584529, -100.30875706463121),
				$scope.createPath(25.670660150507608, -100.30837082653306),
				$scope.createPath(25.672207322689516, -100.30875706463121),
				$scope.createPath(25.675127555458506, -100.30837082653306),
				$scope.createPath(25.67543697990404, -100.30817770748399),
				$scope.createPath(25.675154307182556, -100.30501377477776),
				$scope.createPath(25.674409751485516, -100.29841554060113),
				$scope.createPath(25.67421861650403, -100.29762053542072),
				$scope.createPath(25.67474077377193, -100.29581809096271),
				$scope.createPath(25.67474077377193, -100.294788122701),
				$scope.createPath(25.674702095534244, -100.2937796121114),
				$scope.createPath(25.67443134751895, -100.29305005125934),
				$scope.createPath(25.674044563573034, -100.29281401686603),
				$scope.createPath(25.674121920462643, -100.29088282637531),
				$scope.createPath(25.674392669180836, -100.29021763853962),
				$scope.createPath(25.675417640899706, -100.2896382813924),
				$scope.createPath(25.6762492152514, -100.28965973906452),
				$scope.createPath(25.67698409008149, -100.29000306181842),
				$scope.createPath(25.679691484563975, -100.2896382813924),
				$scope.createPath(25.681934707679414, -100.29086136870319),
				$scope.createPath(25.682785574365173, -100.28062605910236),
				$scope.createPath(25.682920938959484, -100.27929568343097),
				$scope.createPath(25.680967806342657, -100.27367377333576),
				$scope.createPath(25.679594792963073, -100.27508997969562),
				$scope.createPath(25.67754491256102, -100.27603411726886),
				$scope.createPath(25.676326570710064, -100.27695679716999),
				$scope.createPath(25.67534028485109, -100.27888798766071),
				$scope.createPath(25.674315312466973, -100.2834799294942),
				$scope.createPath(25.672516754716142, -100.28903746657306),
				$scope.createPath(25.669151638296366, -100.29772782378132),
				$scope.createPath(25.667082237928003, -100.3017404084676),
				$scope.createPath(25.664509942539464, -100.30579590587877),
				$scope.createPath(25.663600922628422, -100.30768418102525),
				$scope.createPath(25.663252785508195, -100.30974411754869),
				$scope.createPath(25.664045763025165, -100.31317734508775),
				$scope.createPath(25.66557368044439, -100.32115959911607),
				$scope.createPath(25.667797829034143, -100.33435606746934),
				$scope.createPath(25.66942239830398, -100.34173750667833),
				$scope.createPath(25.67249741523801, -100.3519084432628),
				$scope.createPath(25.67346438530078, -100.35300278454088),
				$scope.createPath(25.674121920462643, -100.35624289303087),
				$scope.createPath(25.675359623867962, -100.36066317348741),
				$scope.createPath(25.67520491164521, -100.36122107296251),
				$scope.createPath(25.674876147505017, -100.36130690365098),
				$scope.createPath(25.674412008351446, -100.36119961529039),
				$scope.createPath(25.674102581244934, -100.35961174755357),
				$scope.createPath(25.67358042118115, -100.35770201473497),
				$scope.createPath(25.67278750708052, -100.3554918745067),
				$scope.createPath(25.67253609419114, -100.35379671840928),
				$scope.createPath(25.671994587705264, -100.35343193798326),
				$scope.createPath(25.671279021790106, -100.35338902263902),
				$scope.createPath(25.670698830056903, -100.35315298824571),
				$scope.createPath(25.670195994937288, -100.35162949352525),
				$scope.createPath(25.66760442645602, -100.34315371303819),
				$scope.createPath(25.665902470240542, -100.33495688228868),
				$scope.createPath(25.663833013477255, -100.32233977108262),
				$scope.createPath(25.663523558911766, -100.320065257838),
				$scope.createPath(25.665399614891147, -100.31955027370714),
				$scope.createPath(25.666811472605634, -100.31980776577257),
				$scope.createPath(25.671412142532148, -100.3189612616552),
				$scope.createPath(25.67123808550307, -100.3140259970678),
				$scope.createPath(25.671122047342497, -100.31138670339715),
				$scope.createPath(25.67062888389988, -100.30837190046441),
				$scope.createPath(25.67157652949292, -100.30852210416924),
				$scope.createPath(25.67195365166397, -100.30837190046441),
				$scope.createPath(25.672379121398947, -100.30800712003838),
				$scope.createPath(25.672727231870706, -100.3079212893499)
			],
			stroke: {
				color: '#5c1410',
				weight: 3,
				opacity: 0.8
			},
			editable: true,
			draggable: true,
			geodesic: true,
			visible: true,
			icons: [{
				icon: {
					path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
				},
				offset: '25px',
				repeat: '50px'
			}]
		};
	});