---
layout: home
---

<section id="schedule">
   <div class="container">
      <div class="row">
         {% for day in site.data.schedule %}
         <div class="schedule-container">
            <h2>{{day.date}}</h2>
            <div class="grid-wrapper">
               {% for timeslot in day.slots %}
               <article>
                  <h3>{{timeslot.time}} - {{timeslot.title}}</h3>
                  <p>{{timeslot.desc}}</p>
                  <a href="#">@{{timeslot.room}}</a>
               </article>
               {% endfor %}
            </div>
         </div>
         {% endfor %}
      </div>
   </div>
</section>
