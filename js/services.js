'use strict';

/* Provider */

archWalk.provider('Leaflet', function() {
    var Leaflet = L;

    this.$get = function() {
        return Leaflet;
    };
});

/* Service */

//archWalk.service('MapLibrary', ['Leaflet',function(Leaflet) {
//
//    this.showMap = function(divId){
//        // create a map in the "map" div, set the view to a given place and zoom
//        var map = L.map('map-div').setView([51.505, -0.09], 13);
//
//            L.tileLayer('http://{s}.tile.cloudmade.com/123f560e5bab4afab1b85d73db1f813b/997/256/{z}/{x}/{y}.png', {
//                maxZoom: 18
//            }).addTo(map);
//    }
//
//}]);