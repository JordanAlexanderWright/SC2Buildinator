The SC2 Buildinator

Project Goal:
---
The Goal of this is project was to make an online application that allows users to
create/import starcraft 2 builds, then use those builds to practice from. 

![screenshot]

**Usage**
---

To use the Buildinator, simply select what way you want to input your build,(Manually or
via JSON import)

![screenshot2]

When entering build items manually, simply type the object you want to build,
add the time and supply, and click add to build.

The best way to use the Buildinator, however, is by using the JSON import feature.
In order to make the usage of this application not tedious, I also created a script
that allows a user to make a build order from any replay. 

Please check out this script at the seperate github repo!
https://github.com/Soule222/sc2tools

The idea is that a user can either save these build files either on their own computer, or
via something like pastebin in order to easily plug in whatever they may want. 

Inluded in this repository are a couple of different builds for demo purposes. Just 
check out the demo folder and copy the text from any of the builds, paste it into 
the import field on the application, and the build order will be loaded into the table.

**Code Louisville Requirements**
---

In addition to providing the above description of the project, here are a few features
I included:

1. Create your own original CSS animation. The Race Selection at the top is animated, as is 
the removal of unneeded input fields based on user selection. 

2. Using Flexbox and CSS Grid to organize content areas based on mobile or desktop views. 
The race selector in the nav will collapse to a single row on mobile (as well as the rest of the nav).

3. Create a form, validate at least one field, and use that information on your page. Both of the forms 
of input on this page go through validation, and then allow a user to put information into the build table,
then make a series of figures based on that data.

4. Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page. In essence, I am doing this with the table data in order to display all of the different build items as figures. I don't specifically save them as an array, but iterate through the table data in a similar fashion. 

5. Create a JavaScript loop that dynamically displays HTML on your page. Essentially, I worked out a way using WebWorkers to create multiple instances of JavaScript that all create interval loops, and then update the data on 
the application. 

There's lots of other stuff, but that should cover my requirements.

**Acknowledgements**
---

StarCraft 2 and all assest related to StarCraft all belong to Blizzard Entertainment, Inc.

StarCraft® II: Wings of Liberty®

©2010 Blizzard Entertainment, Inc. All rights reserved. Wings of Liberty is a trademark, and StarCraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

StarCraft® II: Heart of the Swarm®

©2013 Blizzard Entertainment, Inc. All rights reserved. Heart of the Swarm and StarCraft are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

Unfortunately Blizzard doesn't also include a copyright notice on their webpage for StarCraft II: Legacy of the Void, but it applies here as well. 

While I didn't end up using Icons from this website, it's a great resource for fan related assest and helped
inspire me to come up with ideas of my own:

SC2 Mapster: https://www.sc2mapster.com/

I found this python library that helped give me direction on this project. It gave me ways to manipulate and get data from StarCraft 2 replays, and it's what I used
to write the python scripts that enabled me to create JSON data to use in this application.

https://github.com/GraylinKim/sc2reader


I'd like to thank all of the Code Louisville mentors and staff that helped me learn, inspired me to push further,
and provide excellent resources to use as I continued to learn more.

[screenshot]: resources/demo/projectss.png
[screenshot2]: resources/demo/manualorjson.png