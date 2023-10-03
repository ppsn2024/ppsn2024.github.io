(function (L) {
    var map = L.map('map', {
        dragging: !L.Browser.mobile,
        tap: !L.Browser.mobile
    }).setView([48.36936535443323, 14.513704089483294], 5);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        scrollWheelZoom: false,
        accessToken: 'pk.eyJ1IjoianplbmlzZWsiLCJhIjoiY2wyeXIxNWVpMDJvMjNjcWJpYWloZ29vdSJ9.aVp5R2VZRdkWBrCdo8J90Q'
    }).addTo(map);
    map.scrollWheelZoom.disable();


    var marker = L.marker([48.36831567160878, 14.512507038275828]).addTo(map)
        .bindPopup('University of Applied Sciences Upper Austria<br/>Softwarepark 11<br/>4232 Hagenberg im Mühlkreis'
            + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.36831%2C14.51250">Route here</a>');

    marker.openPopup();
    // var popup = L.popup()
    //     .setLatLng([48.36936535443323, 14.513704089483294])
    //     .setContent("Softwarepark Hagenberg")
    //     .openOn(map);

})(L);


(function (L) {
    var map = L.map('map-parkhotel', {
        dragging: !L.Browser.mobile,
        tap: !L.Browser.mobile
    }).setView([48.3707057, 14.5163663], 7);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        scrollWheelZoom: false,
        accessToken: 'pk.eyJ1IjoianplbmlzZWsiLCJhIjoiY2wyeXIxNWVpMDJvMjNjcWJpYWloZ29vdSJ9.aVp5R2VZRdkWBrCdo8J90Q'
    }).addTo(map);
    map.scrollWheelZoom.disable();


    var marker = L.marker([48.3707057, 14.5163663]).addTo(map)
        .bindPopup('Parkhotel Hagenberg<br/>Hauptstraße 103<br/>4232 Hagenberg im Mühlkreis'
            + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.37058%2C14.51619">Route here</a>');

    marker.openPopup();
})(L);
