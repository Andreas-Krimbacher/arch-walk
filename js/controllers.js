'use strict';

/* Controllers */

archWalk.MapController = function( $scope ) {
    console.log('MapController')
    $scope.newMarker = null;

    $scope.$on('addMarker', function(e,point){
        $scope.newMarker = point;
    });

};

archWalk.FormController = function( $scope,$rootScope ) {
    console.log('FormController')
    $scope.showMarker = function(point){
        $rootScope.$broadcast('addMarker',  angular.copy(point));

    }

};