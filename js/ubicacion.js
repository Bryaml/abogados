function initMap() {
    // Ubicación
    var ubicacion = { lat: tu_latitud, lng: tu_longitud };
  
    // Opciones del mapa
    var mapOptions = {
      center: ubicacion,
      zoom: 15
    };
  
    // Crear mapa
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    // Marcador de ubicación
    var marker = new google.maps.Marker({
      position: ubicacion,
      map: map,
      title: "Mi ubicación"
    });
  }
  