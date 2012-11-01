'use strict';

/* Directives */

archWalk.directive('map', function(Leaflet) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function(scope, element, attrs) {
            var map = Leaflet.map(attrs.id, {
                center: [40, -86],
                zoom: 10
            });
            //create a CloudMade tile layer and add it to the map
            Leaflet.tileLayer('http://{s}.tile.cloudmade.com/123f560e5bab4afab1b85d73db1f813b/997/256/{z}/{x}/{y}.png', {
                maxZoom: 18
            }).addTo(map);

            //add markers dynamically
            var points = [{lat: 40, lng: -86},{lat: 40.1, lng: -86.2}];
            for (var p in points) {
                Leaflet.marker([points[p].lat, points[p].lng]).addTo(map);
            }
        }
    };
});
