---
layout: full-width
title: blog
weight: 3
nav_exclude: true
# Note that this index page uses a full-width layout!
---
  <br/>
  <ul class="content-listing ">
    {% for post in site.posts %}      
        <li class="listing">
          {% if forloop.first != true %}
            <hr class="slender">
          {% endif %}
          <a href="{{ post.url | prepend: site.baseurl }}"><h3 class="contrast">{{ post.title }}</h3></a>
          <br><span class="smaller">{{ post.date | date: "%B %-d, %Y" }}</span>  <br/>
          <div>{{ post.excerpt }}</div> 
        </li>
    {% endfor %}
  </ul>
