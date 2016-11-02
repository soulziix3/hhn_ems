var markers = [{lat: 49.12501264, lng: 9.20424968},
    {lat: 49.12216902, lng: 9.211092},
    {lat: 49.12209881, lng: 9.21058774},
    {lat: 49.12266052, lng: 9.21009421},
    {lat: 49.12227434, lng: 9.21203613},
    {lat: 49.12285712, lng: 9.21137094},
    {lat: 49.1228501, lng: 9.21193957},
    {lat: 49.1230467, lng: 9.21048045},
    {lat: 49.12263244, lng: 9.20610309}];

gebaüde_list=[
    "Campus Sontheim",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "Y"

]


var geocoder, directionsServices, directionsDisplay, gebaüde = [], map, marker;

function myMap() {
    if (marker) {
        marker.setMap(null);
    }

    var index = document.getElementById("myList3").value;
    if (index > 0) {

        var position = markers[index];
        console.log(index);
        var g = gebaüde_list[index]

        marker = new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP,
            title: g,
        });

        map.setCenter(position);
        map.setZoom(19);
    } else {
        var location = new google.maps.LatLng(49.122590, 9.210835);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        }

        map = new google.maps.Map(mapCanvas, mapOptions);
        marker = new google.maps.Marker({
            position: location,
            map: map,
            title: "Campus Sontheim",

        });
    }


}






