var map = new GMaps({
    el: '#map',
    lat:  35.4999157,
    lng: -80.625601
});

map.addMarker({
    lat: 35.4999157,
    lng: -80.625601,
    title: 'David H. Murdock Research Institute',
    infoWindow: {
      content: 'David H. Murdock Research Institute'
    }
});

map.setZoom(16);
