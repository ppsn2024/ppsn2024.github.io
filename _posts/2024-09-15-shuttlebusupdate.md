---
layout: post
lang: en
title: "Shuttle Bus Update"
description: To make your experience more convenient, we provide a shuttle bus service from Linz to the conference venue in Hagenberg on all conference days, as well as for social events.
keywords: Shuttle Bus
date: 2024-09-15 11:34 +0200
categories:
  - "Updates"
author: jzenisek
image: /news/resources/2024-09-15-shuttlebusupdate/linz.png
---

Due to the critical weather situation, including possible flooding in the Danube area, the PPSN shuttle bus will not be able to depart from the *Lentos Shipping Pier*. Instead, the bus will park at another free spot in front of *Lentos Art Museum* - please plan to arrive a few minutes early to find the exact spot!

<!--more-->

<br/>
![website](/news/resources/2024-09-15-shuttlebusupdate/linz.png)
<br/><br/>

**Updated Bus Schedule (Note: Departure spot changed)**

The bus will take you from the *Lentos Art Museum* in the city center of Linz to the conference Venue *FH OÖ Hagenberg* in the morning and back again in the evening. An additional shuttle bus will be organized for the social events: The Welcome Reception at *Ars Electronica Center* and the Conference Dinner at *Freistädter Brauhaus*. The shuttle bus service is covered by your conference registration.

For information regarding public transport, please visit our subsite [Venue][ven].

<br/>
<div markdown="1" class="table-responsive">

| Date |           | Time  | From                   | To                     |
| :--- | :-------- | :---- | :--------------------- | :--------------------- |
| Sa   | 14.9.2024 | 07:45 | Lentos Art Museum   | FH OÖ Hagenberg        |
| Sa   | 14.9.2024 | 17:45 | FH OÖ Hagenberg        | Lentos Art Museum   |
|      |           |       |                        |                        |
| Su   | 15.9.2024 | 07:45 | Lentos Art Museum   | FH OÖ Hagenberg        |
| Su   | 15.9.2024 | 17:45 | FH OÖ Hagenberg        | Lentos Art Museum   |
|      |           |       |                        |                        |
| Mo   | 16.9.2024 | 08:00 | Lentos Art Museum   | FH OÖ Hagenberg        |
| Mo   | 16.9.2024 | 18:30 | FH OÖ Hagenberg        | Ars Electronica Center |
| Mo   | 16.9.2024 | 22:00 | Ars Electronica Center | FH OÖ Hagenberg        |
|      |           |       |                        |                        |
| Tu   | 17.9.2024 | 08:00 | Lentos Art Museum   | FH OÖ Hagenberg        |
| Tu   | 17.9.2024 | 18:30 | FH OÖ Hagenberg        | Freistädter Brauhaus   |
| Tu   | 17.9.2024 | 22:00 | Freistädter Brauhaus   | FH OÖ Hagenberg        |
| Tu   | 17.9.2024 | 22:30 | FH OÖ Hagenberg        | Lentos Art Museum   |
|      |           |       |                        |                        |
| We   | 18.9.2024 | 08:00 | Lentos Art Museum   | FH OÖ Hagenberg        |
| We   | 18.9.2024 | 16:15 | FH OÖ Hagenberg        | Lentos Art Museum   |
{: .table }

</div>

<br/><br/>

**Lentos Art Museum** (first bus stop) <br/>
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
    }).setView([48.308522, 14.288806], 16);

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


    var marker = L.marker([48.308522, 14.288806]).addTo(map)
        .bindPopup('Lentos Art Museum<br/>Doktor-Ernst-Koref-Promenade<br/>4020 Linz'
            + '<br/><br/><a target="_blank" href="https://www.openstreetmap.org/directions?from=&to=48.30865448583489%2C14.28869887895059">Route here (via OpenStreetMap)</a>'
            + '<br/><a target="_blank" href="https://www.google.com/maps/dir//Lentos+Kunstmuseum+Linz,+Doktor-Ernst-Koref-Promenade+1,+4020+Linz/@48.3087188,14.2879512,17.86z/data=!4m9!4m8!1m0!1m5!1m1!1s0x477397873ef46f97:0x243a88f9bda091c6!2m2!1d14.288806!2d48.308522!3e0?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D">Route here (via Google Maps)</a>');

    marker.openPopup();
})(L);
</script>

[ven]: /venue#travel
