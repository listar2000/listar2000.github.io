ACCESS_TOKEN = 'pk.eyJ1IjoiZXBvdGFzaCIsImEiOiJjaXFqeDBpNTUwMGk5ZnhtOGN4ZjJ2MHhmIn0.r5jxF47AZ4lwsr6ADeKbAA'
METERS_PER_FOOT = 0.3048
DEGREES_PER_RADIAN = 180/Math.PI

viewers = []
maps = []

function calculateHfov(width) {
    return 2*Math.atan(width/300/2) * DEGREES_PER_RADIAN
}

window.onresize = function() {
    figures = document.getElementsByClassName('higherground_panorama')
    hfov = calculateHfov(figures[0].offsetWidth)
    for (var name in viewers) {
        viewers[name].setHfov(hfov)
    }
}

function higher_ground(args) {
    name = args[0]
    lng = parseFloat(args[1])
    lat = parseFloat(args[2])
    imageUrl = args[3]
    distance = args[4]
    yaw = args[5]
    width = document.getElementById(name + '-panorama').offsetWidth

    viewers[name] = pannellum.viewer(name + '-panorama', {
        "type": "equirectangular",
        "panorama": imageUrl,
        "yaw": yaw,
        "vaov": 54.15,
        "hfov": calculateHfov(width),
        "minPitch":-25,
        "maxPitch":25,
        "autoLoad":true
    });

    var mymap = L.map(name + '-map').setView([lat, lng], 13);
    /*
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + ACCESS_TOKEN, {
            attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>; © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
    }).addTo(mymap);
    */

    var marker = L.marker([lat, lng]).addTo(mymap);
    var circle = L.circle([lat, lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: distance * METERS_PER_FOOT
    }).addTo(mymap);

    maps[name] = mymap
}
