'use strict';

/* Directives */

archWalk.directive('map', function(Leaflet) {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        require: archWalk.MapController,
        link: function(scope, element, attrs) {

            var map = Leaflet.map(attrs.id, {
                center: [0,0],
                zoom: 1
            });
            //create a CloudMade tile layer and add it to the map
            Leaflet.tileLayer('http://{s}.tile.cloudmade.com/123f560e5bab4afab1b85d73db1f813b/997/256/{z}/{x}/{y}.png', {
                maxZoom: 18
            }).addTo(map);



            scope.$watch('newMarker', function(newPoint, oldPoint){
                if(newPoint != null) {
                    Leaflet.marker([newPoint.lat, newPoint.lng]).addTo(map);
                }
            },true);
        }
    };
});
