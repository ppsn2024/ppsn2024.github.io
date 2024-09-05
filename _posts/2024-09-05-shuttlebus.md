---
layout: post
lang: en
title: "Shuttle Bus Schedule"
description: To make your experience more convenient, we provide a shuttle bus service from Linz to the conference venue in Hagenberg on all conference days, as well as for social events.
keywords: Poster
date: 2024-09-05 11:31 +0200
categories:
  - "Updates"
author: jzenisek
image: /news/resources/2024-09-05-shuttlebus/map1.png
---

To make your experience more convenient, we provide a shuttle bus service from Linz to the conference venue in Hagenberg on all conference days, as well as for social events.

<!--more-->

The bus will take you from the *Lentos Shipping Pier* at the Lentos Art Museum in the city center of Linz to the conference Venue *FH OÖ Hagenberg* in the morning and back again in the evening. An additional shuttle bus will be organized for the social events: The Welcome Reception at *Ars Electronica Center* and the Conference Dinner at *Freistädter Brauhaus*. The shuttle bus service is covered by your conference registration.

For information regarding public transport, please visit our subsite [Venue][ven].

<br/>

| Date |           | Time  | From                   | To                       |
| :--  | :---      | :---  | :-----                 | :-----                   |
| Sa   | 14.9.2024 | 07:45 | Lentos Shipping Pier   | FH OÖ Hagenberg          |
| Sa   | 14.9.2024 | 17:45 | FH OÖ Hagenberg        | Lentos Shipping Pier     |
||||||
| Su   | 15.9.2024 | 07:45 | Lentos Shipping Pier   | FH OÖ Hagenberg          |
| Su   | 15.9.2024 | 17:45 | FH OÖ Hagenberg        | Lentos Shipping Pier     |
||||||
| Mo   | 16.9.2024 | 08:00 | Lentos Shipping Pier   | FH OÖ Hagenberg          |
| Mo   | 16.9.2024 | 18:30 | FH OÖ Hagenberg        | Ars Electronica Center   |
| Mo   | 16.9.2024 | 22:00 | Ars Electronica Center | FH OÖ Hagenberg          |
||||||
| Tu   | 17.9.2024 | 08:00 | Lentos Shipping Pier   | FH OÖ Hagenberg          |
| Tu   | 17.9.2024 | 18:30 | FH OÖ Hagenberg        | Freistädter Brauhaus     |
| Tu   | 17.9.2024 | 22:00 | Freistädter Brauhaus   | FH OÖ Hagenberg          |
||||||
| We   | 18.9.2024 | 08:00 | Lentos Shipping Pier   | FH OÖ Hagenberg          |
| We   | 18.9.2024 | 16:15 | FH OÖ Hagenberg        | Lentos Shipping Pier     |
{: .table }
<br/><br/>

**Lentos Shipping Pier** (first bus stop) <br/>
<div class="row">
    <div class="col-md-12">
        <div id="map-pier" style="height:500px" class="container-fluid"></div>
    </div>
</div>

<script src="{{"/assets/js/leaflet.js" | relative_url }}"></script>
<script>
  (function (L) {
    var map = L.map('map-pier', {
        dragging: !L.Browser.mobile,
        tap: !L.Browser.mobile
    }).setView([48.30865448583489, 14.28869887895059], 16);

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


    var marker = L.marker([48.30865448583489, 14.28869887895059]).addTo(map)
        .bindPopup('Lentos Shipping Pier<br/>Doktor-Ernst-Koref-Promenade<br/>4020 Linz'
            + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.30865448583489%2C14.28869887895059">Route here (via OpenStreetMap)</a>'
            + '<br/><a target="_blank" href="https://www.google.com/maps/dir//Doktor-Ernst-Koref-Promenade,+4020+Linz/@48.3086502,14.2838053,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47739780d456daa3:0x552756c4414e47ae!2m2!1d14.2886762!2d48.3086467!3e0?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D">Route here (via Google Maps)</a>');

    marker.openPopup();
})(L);
</script>

[ven]: /venue#travel
