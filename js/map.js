(function initMap() {
  var uluru = {
    lat: 52.5162619,
    lng: 13.3775093
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru,
    styles: [{
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#00e1ff'
      }]
    },
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#00A5BB'
      }]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [{
        color: '#00A5BB'
      }]
    }]
  });

  var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the ' +
    '<a href="https://en.wikipedia.org/w/index.php?title=Uluru">https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    '(last visited June 22, 2009).</p>' +
    '</div>' +
    '</div>';

  


  

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  
})();

