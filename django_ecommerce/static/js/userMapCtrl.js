mecApp.factory('locations', function($http) {
 
  var locsUrl = '/api/v1/user_locations';

  return {
    getAll: /*function() {return $http.get(locsUrl);}, */
      function() { return $http.get(locsUrl).then(function(response) {
                      console.log(response);
                      return response.data; 
                    });
    },
  };

});

mecApp.controller('UserMapCtrl', function($scope, locations) {
  $scope.map = {
    center: {
        latitude: 38.062056, 
        longitude: -122.643380
    },
    zoom: 14,
    options: { 
      mapTypeId: google.maps.MapTypeId.HYBRID,
    }
  };

  //get all the user locations
  $scope.locs = [];
  cache = function(locs){
    $scope.locs = locs;
  }

  locations.getAll().then(cache);
});
