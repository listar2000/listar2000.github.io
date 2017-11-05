---
layout: full-width
title:  "The 7 Most Remote Chicago Parks"
date:   2017-11-05
title_include: true
categories:
custom_js: 
 - pannellum
 - leaflet
 - higher_ground
custom_css:
 - pannellum
 - leaflet
 - higher_ground
---
Stretching over 18 miles from Edgewater to South Shore, Chicago’s lakefront trail is perhaps the city’s most iconic park. But the term "trail" is absurd. For most of its length, the paved path runs adjacent to a four lane highway!
<!--more-->

That observation led me to wonder about the points in Chicago that are farthest from a road. So I wrote a [computer program](https://github.com/potash/higher-ground) to calculate the (Euclidean) distance to the nearest road at every point in Chicago. Then I defined the "remoteness" of a park to be the maximum distance to road within that park.

How remote is the Lakefront trail? Just 608 feet, when the path goes east around Museum Campus:
{% higherground lakefront  -87.61536 41.86810 'https://i.imgur.com/9tiJATm.jpg' 608 0 "An interactive panorama (above) I shot at the point farthest from a road in the Lakefront trail. And a map (below) with a marker at the point and a circle of radius equal to the distance to the nearest road, so the each circle contains no roads." %}
<br/>

Next I visited the most remote points in Chicago's parks. I was surprised in a number of ways. First, by just how remote these spots are. Second, by the beauty that my simplistic measure of remoteness led me to. Third, by the fact that 5 of the top 7 are on Chicago's South Side. But that's not a coincidence. Nor can it be principally explained to the city's generosity to a side of town it otherwise neglects. The abundance of park land on Chicago's South Side is part of a larger story in land use history across the country: the conversion of former industrial and military sites into parks.

For each site, I've included a panorma photo that I took at (or near) the point farthest from a road. I've also included a map with a marker for the point farthest from a road and a circle whose radius is the distance to the nearest road.
 
## 7. Lincoln Park: 1,595 ft
Lincoln park is Chicago’s largest park at 1,208 acres. There’s a lot to see, but roads criss-cross through most of it. The farthest point from a road in Lincoln Park is the Montrose Point Bird Sancturary.

> During the Cold War, Montrose point, which juts out into Lake Michigan, was used by the United States Army as a Nike missile base. The Army camouflaged their missile launchers and barracks behind honeysuckle hedges. ([Wikipedia](https://en.wikipedia.org/wiki/Lincoln_Park))
{% higherground montrose   -87.63199 41.96656 'https://i.imgur.com/Wo9WkYc.jpg' 1595 -72 %}

## 6. Powderhorn Marsh and Prairie: 1,614 ft
> Tucked between rail yards and neighborhoods at the far southeast side of Chicago, Powderhorn Lake Forest Preserve’s 192 acres of woodland, prairie and wetland reflect the ecological richness that survives in similar pockets across the industrialized Calumet region. The lake and surrounding lands are popular among anglers, nature lovers and birders. ([FPDCC](http://fpdcc.com/powderhorn-lake/))
{% higherground powderhorn -87.52820 41.64467 'https://i.imgur.com/FFz1iDz.jpg' 1614 32 %}

## 5. Beaubian Woods: 1,633 ft
> Before European settlement, Beaubien Woods was a wet prairie and open savanna community. Early agriculture and grazing altered the soil and removed native vegetation. Railroad and expressway construction further damaged soils and cleared areas for use in construction staging. ([FPDCC](http://fpdcc.com/beaubien-woods/))
{% higherground beaubian   -87.58553 41.64588 'https://i.imgur.com/BbhuS7w.jpg' 1633 131 %}

## 4. Catherine Chevalier Woods: 1,650 ft
Chevalier Woods is the most accessible park on this list: the entrance is less than a mile from the Cumberland stop on the Blue Line; the Des Plaines River Trail makes it easy to get to by bike; and if you're visiting from out of town, it's just a few miles from O'Hare airport! That last fact makes this park better for watching planes than birds. And as you can see from the photo there's almost no understory. You can thank the [deer](https://www.cityofchicago.org/content/dam/city/depts/zlup/Sustainable_Development/Publications/Chicago_Nature_and_Wildlife_Plan/Catherine_Chevalier_Woods_Forest_Preserve.pdf) for that.
{% higherground chevalier  -87.85596 41.97348 'https://i.imgur.com/gWw3QC8.jpg' 1650 78 %}

## 3. William W. Powers State Recreation Area: 1,814 ft
Powers Recreation Area is another former Nike missile site. There's not much to see here (apparently the main attraction is fishing) but you can get pretty far from a road by bushwacking out on this man-made peninsula.
{% higherground powers     -87.53181 41.66287 'https://i.imgur.com/r3e9kBC.jpg' 1814 -5 %}

## 2. Big Marsh: 2,324 ft
> Once the site of a waste and slag dumping ground from surrounding industrial operations since the late 1800s, the City of Chicago and the Chicago Park District teamed up in early 2000s to restore this area to a healthy habitat and eco-recreation park.  The Chicago Park District acquired the site in 2011... ([Chicago Park District](http://www.chicagoparkdistrict.com/parks/big-marsh-park-no564/))
{% higherground bigmarsh   -87.56799 41.69063 'https://i.imgur.com/pskOvVm.jpg' 2324 10 %}

## 1. Park No. 566: 2,614 ft
The farthest point from a road in Chicago lies on the former site of U.S. Steel South Works. The steel mill was active from 1901 until its closure for economic reasons in 1992. The buildings were demolished in 1997. A narrow stretch of coast was acquired by the Park District for Park No. 566. The rest of the land was supposed to be the site of a mixed development of residential, retail, and wind power. That [folded once](https://chicago.curbed.com/2016/3/1/11140996/chicago-lakeside-development-project-abandoned) but has since been [resurrected](https://chicago.curbed.com/2017/1/31/14445698/chicago-south-works-us-steel-new-development-plan). Should the plans materialize, expect the construction of new roads to bump this park off the list.

{% higherground park566    -87.53085 41.74773 'https://i.imgur.com/mCg3C5H.jpg' 2614 -175 %}


That's all for parks. But since you made it this far I'll leave you with a bonus site:


## Calumet Breakwater: 6,066 ft!
It's not a park, but I couldn't resist visiting this concrete barrier that protects Calumet Harbor. It extends more than a mile into Lake Michigan. The lighthouse at the end is technically in Indiana waters!

{% higherground calumet    -87.50793 41.73683 'https://i.imgur.com/SxfN0JY.jpg' 6066 143 %}

