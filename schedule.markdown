---
layout: home
---

<section id="schedule">
   {% for day in site.data.schedule %} 
   <div class="row schedule-container">
      <h2>{{day.date}}</h2>
      {% for timeslot in day.slots %}
      <div class="col-lg-4 col-sm-6">
         <article class="row">
            <h3>{{timeslot.time}} - {{timeslot.title}}</h3>
            <p>{{timeslot.desc}}</p>
            <a class="align-text-bottom" href="#">@{{timeslot.room}}</a>
         </article>
      </div>
      {% endfor %}
   </div>
   {% endfor %}
</section>
