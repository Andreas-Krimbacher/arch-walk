'use strict';

/* Controllers */

archWalk.MapController = function( $scope ) {
    $scope.showLocation = null;

    $scope.$on('showLocation', function(e,locationSearchText){
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': locationSearchText}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                $scope.showLocation = results[0];
                $scope.$digest();
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
};

archWalk.FormController = function( $scope,$rootScope ) {

    $scope.title = "New Data";
    $scope.mainCategory = "Architecture";
    $scope.language = "English";


//    $scope.form.$valid=false;
//    $scope.form.$invalid=true;

    $scope.showLocation = function(locationSearchText){
        $rootScope.$broadcast('showLocation', locationSearchText);
    }

    $scope.saveData = function(){
        alert('asda');
    }
};
