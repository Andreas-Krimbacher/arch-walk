'use strict';

/* Provider */

archWalk.provider('Leaflet', function() {
    var Leaflet = L;

    this.$get = function() {
        return Leaflet;
    };
});

/* Service */

archWalk.factory('MediaWiki', ['$http',function($http) {
    var MWFactory = {};


    MWFactory.checkPageName = function(name){

        alert('yes');

    }


    return MWFactory;
}]);
