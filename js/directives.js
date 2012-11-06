'use strict';

/* Directives */

archWalk.directive('map', function(Leaflet) {
    return {
        restrict: 'E',
        replace: false,
        template: '<div id="map"></div>',
        link: function(scope, element, attrs) {

//            var map = Leaflet.map('map', {
//                center: [0,0],
//                zoom: 10
//            });
//            //create a CloudMade tile layer and add it to the map
////            Leaflet.tileLayer('http://{s}.tile.cloudmade.com/123f560e5bab4afab1b85d73db1f813b/997/256/{z}/{x}/{y}.png', {
////                maxZoom: 18
////            }).addTo(map);
//
//            var googleLayer = new Leaflet.Google();
//            map.addLayer(googleLayer);


            var mapOptions = {
                zoom: 1,
                center: new google.maps.LatLng(0, 0),
                disableDefaultUI: true,
                mapTypeControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById('map'),
                mapOptions);





             scope.$watch('showLocation', function(newLocation, oldLocation){
                 if(newLocation){
                     map.setCenter(newLocation.geometry.location);
                     map.setZoom(16);
                 }
            },true);
        }
    };
});
