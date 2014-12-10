"use strict";angular.module("corruptourMtyMapaApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","google-maps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("corruptourMtyMapaApp").controller("MainCtrl",["$scope",function(a){a.map={center:{latitude:25.67161,longitude:-100.31976},zoom:13,options:{scrollwheel:!0},draggable:!0},a.showStation=function(b){a.hideAllStationsWindows(),a.stations[b].show=!0,a.map.center={latitude:25.67161,longitude:-100.31976},a.map.zoom=13},a.createStation=function(b,c,d,e){var f={id:b,name:b+". "+c,options:{draggable:!1,title:c,labelAnchor:"10 39",labelContent:b+"",labelClass:"labelMarker",anchorPoint:google.maps.Point(40,40)},latitude:d,longitude:e,show:!1,onClick:function(){a.hideAllStationsWindows(),f.show=!0}};return f},a.hideAllStationsWindows=function(){angular.forEach(a.stations,function(a){a.show=!1})},a.stations=[a.createStation(0,"Inicio",25.67275,-100.30787),a.createStation(1,"Palacio de Gobierno",25.67257,-100.30922),a.createStation(2,"Congreso del Estado",25.66916,-100.31087),a.createStation(3,"Palacio Municipal Monterrey",25.66477,-100.31077),a.createStation(4,"Barrio Antiguo",25.66493,-100.30792),a.createStation(5,"Infonabit",25.6686,-100.31065),a.createStation(6,"Torre VIP",25.67573,-100.29225),a.createStation(7,"Par Vial",25.66782,-100.33429),a.createStation(8,"Casino Royale",25.674156,-100.354931),a.createStation(9,"Rio Santa Catarina",25.66817,-100.34156),a.createStation(10,"Isssteleon",25.67193,-100.31938)],a.stations[0].show=!0,a.createPath=function(a,b){return{latitude:a,longitude:b}},a.route={path:[a.createPath(25.672729488768493,-100.30789875774644),a.createPath(25.673773814064106,-100.30764126568101),a.createPath(25.674083242024125,-100.3109886625316),a.createPath(25.673135616359602,-100.31111740856431),a.createPath(25.672922883032086,-100.30976557522081),a.createPath(25.66452928331333,-100.31131052761339),a.createPath(25.664239171375716,-100.31122469692491),a.createPath(25.664123126403027,-100.31107449322008),a.createPath(25.664142467239664,-100.31085991649888),a.createPath(25.664200489730714,-100.31060242443345),a.createPath(25.665457636770462,-100.31021618633531),a.createPath(25.66517524707723,-100.31030370733663),a.createPath(25.66452928331333,-100.30579590587877),a.createPath(25.664103785563288,-100.30628943233751),a.createPath(25.66356224077638,-100.30766272335313),a.createPath(25.663542899845652,-100.30929350643419),a.createPath(25.663774990807404,-100.31025910167955),a.createPath(25.664200489730714,-100.31055950908922),a.createPath(25.668668136753222,-100.30955099849962),a.createPath(25.66851341584529,-100.30875706463121),a.createPath(25.670660150507608,-100.30837082653306),a.createPath(25.672207322689516,-100.30875706463121),a.createPath(25.675127555458506,-100.30837082653306),a.createPath(25.67543697990404,-100.30817770748399),a.createPath(25.675154307182556,-100.30501377477776),a.createPath(25.674409751485516,-100.29841554060113),a.createPath(25.67421861650403,-100.29762053542072),a.createPath(25.67474077377193,-100.29581809096271),a.createPath(25.67474077377193,-100.294788122701),a.createPath(25.674702095534244,-100.2937796121114),a.createPath(25.67443134751895,-100.29305005125934),a.createPath(25.674044563573034,-100.29281401686603),a.createPath(25.674121920462643,-100.29088282637531),a.createPath(25.674392669180836,-100.29021763853962),a.createPath(25.675417640899706,-100.2896382813924),a.createPath(25.6762492152514,-100.28965973906452),a.createPath(25.67698409008149,-100.29000306181842),a.createPath(25.679691484563975,-100.2896382813924),a.createPath(25.681934707679414,-100.29086136870319),a.createPath(25.682785574365173,-100.28062605910236),a.createPath(25.682920938959484,-100.27929568343097),a.createPath(25.680967806342657,-100.27367377333576),a.createPath(25.679594792963073,-100.27508997969562),a.createPath(25.67754491256102,-100.27603411726886),a.createPath(25.676326570710064,-100.27695679716999),a.createPath(25.67534028485109,-100.27888798766071),a.createPath(25.674315312466973,-100.2834799294942),a.createPath(25.672516754716142,-100.28903746657306),a.createPath(25.669151638296366,-100.29772782378132),a.createPath(25.667082237928003,-100.3017404084676),a.createPath(25.664509942539464,-100.30579590587877),a.createPath(25.663600922628422,-100.30768418102525),a.createPath(25.663252785508195,-100.30974411754869),a.createPath(25.664045763025165,-100.31317734508775),a.createPath(25.66557368044439,-100.32115959911607),a.createPath(25.667797829034143,-100.33435606746934),a.createPath(25.66942239830398,-100.34173750667833),a.createPath(25.67249741523801,-100.3519084432628),a.createPath(25.67346438530078,-100.35300278454088),a.createPath(25.674121920462643,-100.35624289303087),a.createPath(25.675359623867962,-100.36066317348741),a.createPath(25.67520491164521,-100.36122107296251),a.createPath(25.674876147505017,-100.36130690365098),a.createPath(25.674412008351446,-100.36119961529039),a.createPath(25.674102581244934,-100.35961174755357),a.createPath(25.67358042118115,-100.35770201473497),a.createPath(25.67278750708052,-100.3554918745067),a.createPath(25.67253609419114,-100.35379671840928),a.createPath(25.671994587705264,-100.35343193798326),a.createPath(25.671279021790106,-100.35338902263902),a.createPath(25.670698830056903,-100.35315298824571),a.createPath(25.670195994937288,-100.35162949352525),a.createPath(25.66760442645602,-100.34315371303819),a.createPath(25.665902470240542,-100.33495688228868),a.createPath(25.663833013477255,-100.32233977108262),a.createPath(25.663523558911766,-100.320065257838),a.createPath(25.665399614891147,-100.31955027370714),a.createPath(25.666811472605634,-100.31980776577257),a.createPath(25.671412142532148,-100.3189612616552),a.createPath(25.67123808550307,-100.3140259970678),a.createPath(25.671122047342497,-100.31138670339715),a.createPath(25.67062888389988,-100.30837190046441),a.createPath(25.67157652949292,-100.30852210416924),a.createPath(25.67195365166397,-100.30837190046441),a.createPath(25.672379121398947,-100.30800712003838),a.createPath(25.672727231870706,-100.3079212893499)],stroke:{color:"#5c1410",weight:3,opacity:.8},editable:!0,draggable:!0,geodesic:!0,visible:!0,icons:[{icon:{path:google.maps.SymbolPath.FORWARD_OPEN_ARROW},offset:"25px",repeat:"50px"}]}}]),angular.module("corruptourMtyMapaApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);