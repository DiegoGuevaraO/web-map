for(let i = 0; i < markers.length; i++){
    var marker = L.marker([markers[i]['latitud'],markers[i]['longitud']], {icon: redIcon}).addTo(map);
    marker.bindPopup("<p class='text-center font-weigth-bold lead'>"+ markers[i]['nombre'] +"</p><br><h6 class=''>"+ markers[i]['descripcion'] +"</h6>");
}

var popup = L.popup();
var currLatLng;
var lat;
var lng;

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
    currLatLng = e.latlng;

    lat = currLatLng['lat'].toFixed(4);
    lng = currLatLng['lng'].toFixed(4);
    document.getElementById("latitud").value = lat;
    document.getElementById("longitud").value = lng;
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

function centrarVista(lat, lng){
    map.setView([lat, lng], 14, {
        "animate": true,
        "pan": {
            "duration": 1,
        },
    });
}