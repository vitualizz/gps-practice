//Ubicacion del usuario
function initMap() {
  var map = new google.maps.Map(document.getElementById('map-yo'), {
    center: {lat: -10.6607781, lng: -76.2523706},
    zoom: 15
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Aqui estas tú');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: La Geolocalizacion no esta disponible.' :
                        'Error: Tu navegador no soporta la Geolocalizacion.');
}

//Normal
  var origin = {lat: -10.6607781, lng: -76.2523706};
  var map = new google.maps.Map(document.getElementById('map-normal'), {
    zoom: 5,
    center: origin
  });
  google.maps.event.trigger(map, 'resize');
}
