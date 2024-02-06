---
layout: home
lang: en
permalink: /
description: Homepage of the PPSN 2024 conference
---

<section class="background-light pad" id="welcome">
    <div class="container text-justify">
        <h1>Welcome to PPSN 2024!</h1>
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <p class="text-justify">
                    The International Conference on Parallel Problem Solving From Nature is a biannual open forum fostering the study of natural models, iterative optimization heuristics search heuristics, machine learning, and other artificial intelligence approaches. We invite researchers and practitioners to present their work, ranging from rigorously derived mathematical results to carefully crafted empirical studies.
                </p>
                <p>
                    All information regarding the conference organization, call for papers/tutorials/workshops, submission, registration, venue, etc. will be provided and constantly updated on this website and on our social media channels. In case of any additional inquiries, please do not hesitate to <a href="#contact">contact us</a>.
                </p>
                <p>See you soon in beautiful Hagenberg, Austria!</p>
                <br/>
                <p>                
                    <em>Michael Affenzeller & Stephan Winkler</em><br/>
                    <em>PPSN 2024 Conference Chairs</em>
                </p>                
            </div>
        </div>
    </div>
</section>

<section class="background-dark pad" id="news">
    <div class="container">
        <h1>Latest News</h1>
        {% if site.posts.size > 0 %}        
        <div class="row">
            <div class="col-lg-12 col-md-12">
                {% for post in site.posts limit:1 %}
                    {% include post_preview.html preview_size_small=true %}
                {% endfor %}
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 text-right">
                <a href="/news" id="btn-blog" class="btn btn-xl btn-slim-primary blog-button">More News</a>
            </div>
        </div>
        {% else %}
        <div class="row"><div class="col-lg-12"><h4>Sorry, there are currently no posts available.</h4></div></div>
        {% endif %}
    </div>
</section>

<section class="background-primary pad" id="overview">
    <div class="container text-justify">        
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <h2>When?</h2>
                <p class="text-justify">
                    PPSN 2024 will take place from <b>September 14-18, 2024</b>. Other important dates are:<br/><em>(deadline interpretation = end of the day, anywhere on earth)</em>
                </p>
                <ul class="date-list">
                    <li>Paper submission due:           <span>April 5, 2024</span></li>
                    <li>Paper acceptance notification:  <span>May 31, 2024</span></li>
                    <li>Tutorials/Workshop proposal submission due: <span>February 9, 2024</span></li>
                    <li>Tutorials/Workshop acceptance notification: <span>February 23, 2024</span></li>
                    <li>
                        Conference: <span>September 14-18, 2024</span>
                        <ul class="date-list-l2">
                            <li>Tutorials/Workshops: <span>September 14–15, 2024</span></li>
                            <li>Poster Sessions: <span>September 16–18, 2024</span></li>
                        </ul>
                    </li>
                </ul> 
            </div>
            <div class="col-lg-6 col-md-12">
                <h2>Where?</h2>
                <p class="text-justify">
                    PPSN 2024 will take place on the Campus of the <b>University of Applied Sciences Upper Austria</b>, located in the <b>Softwarepark Hagenberg, Austria</b>.
                </p>
                <p>
                    <h6>Address:</h6>
                    <address>
                    University of Applied Sciences Upper Austria<br/>
                    Softwarepark 11<br/>
                    4232 Hagenberg im Mühlkreis<br/>
                    Austria
                    </address>                    
                </p>                             
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <p>
                    For more details regarding dates have a look at the pages for <a href="{{ site.baseurl }}/calls">Calls</a> and <a href="{{ site.baseurl }}/program">Program</a>.
                </p> 
            </div>
            <div class="col-lg-6 col-md-12">
                <p>
                    For more details regarding venue, travel, accomodation and tourism go to: <a href="{{ site.baseurl }}/venue">Venue</a>.
                </p> 
            </div>
        </div>
    </div>
</section>

<section class="background-primary pad" id="contact">
   <div class="container text-justify">
      <h2>Questions? &nbsp;Contact Us!</h2>
      <div class="row"><div class="col-sm-12">Write us to <a style="text-decoration:underline" href="mailto:ppsn2024@fh-ooe.at">ppsn2024@fh-ooe.at</a> to get fast response.<br/><br/></div></div>
      <div class="row contact-info">
         {% for group in site.data.people.groups %}
         {% if group.short == "fhooe" %}
         {% for member in group.members %}
         {% if member.contact %}
         <div class="col-lg-4 col-md-12">
            <h4>{{member.prefix}} {{member.firstname}} {{member.lastname}} {{member.postfix}}</h4>
            <table class="contact-table">

               <body>
                  <tr>
                     <td>Role:</td>
                     <td>{{member.position}}</td>
                  </tr>
                  <tr>
                     <td>Phone:</td>
                     <td>{{member.phone}}</td>
                  </tr>
                  <tr>
                     <td>Mail:</td>
                     <td>
                        <a href="mailto:{{member.mail}}">{{member.mail}}</a>
                     </td>
                  </tr>
               </body>
            </table>
         </div>
         {% endif %}
         {% endfor%}
         {% endif %}
         {% endfor %}
      </div>
   </div>
</section>

{% include map.html %}