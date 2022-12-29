for(let i = 0; i < markers.length; i++){
    var marker = L.marker([markers[i]['latitud'],markers[i]['longitud']], {icon: redIcon}).addTo(map);
    marker.bindPopup("<h5>"+ markers[i]['nombre'] +"</h5><br><p>"+ markers[i]['descripcion'] +"</p>");
}

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
            "<h5>Agregar nuevo marcador?</h5><br>"+
            "<button type='button' class='btn btn-primary mx-auto' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>"+
            "Agregar marcador"+
            "</button>"
            )
        .openOn(map);
    }

map.on('click', onMapClick);

geoLayer = L.geoJSON().addTo(map);

var x = [];
polygons.forEach(element => {
    x.push(element.coordenadas)
});

geoLayer.addData(x).addTo(map);

setTimeout(function () {
    window.dispatchEvent(new Event("resize"));
    }, 500);