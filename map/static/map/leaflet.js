
//Se agregan los marcadores al mapa
for(let i = 0; i < markers.length; i++){
    var marker = L.marker([markers[i]['latitud'],markers[i]['longitud']], {icon: redIcon}).addTo(map);
    marker.bindPopup("<p class='text-center font-weigth-bold lead'>"+ markers[i]['nombre'] +"</p><br><h6 class='pb-3'>"+ markers[i]['descripcion'] +"</h6>");
}

var popup = L.popup();
var lat;
var lng;

//Se crea una funcion que checa si se hizo clic en el mapa y si es asi, se crea un popup para agregar marcador
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
            "<div class=''>"+
            "<h5>Agregar nuevo marcador?</h5><br>"+
            "<button type='button' class='btn btn-primary mx-auto' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>"+
            "Agregar marcador"+
            "</button></div>"
            )
        .openOn(map);
    lat = e.latlng['lat'].toFixed(4);
    lng = e.latlng['lng'].toFixed(4);
    document.getElementById("latitud").value = lat;
    document.getElementById("longitud").value = lng;
}
map.on('click', onMapClick);

//Se crea la capa de geoLayer para agregar los poligonos de los estados por medio de json
geoLayer = L.geoJSON().addTo(map);

//Se crea un array y se mete cada una de los json a dicho array
var x = [];
polygons.forEach(element => {
    x.push(element.coordenadas)
});

//Se agrega el array de json a la capa de geoLayer
geoLayer.addData(x).addTo(map);

//Funcion que recarga la pagina para que el mapa se centre bien en mexico
setTimeout(function () {
    window.dispatchEvent(new Event("resize"));
    }, 500);

//Funcion que centra la vista en el marcador indicado
function centrarVista(lat, lng){
    map.setView([lat, lng], 14, {
        "animate": true,
        "pan": {
            "duration": 1,
        },
    });
}