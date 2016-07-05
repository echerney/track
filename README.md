# Tracker
This app (yet to be named, but for now called Tracker) is going to be a tracking tool for people with depression. 

I created this app in order for people with depression or depressive symptoms to be able to track their symptoms and find a nearby mental heath care facility when necessary. On the home page the user is given instructions to either login and make their way to the assessment, create an account or if necessary, go direction to the find help page. I wanted the find help page to be outside the need for user login so that they can quickly navigate to the page if necessary. After logging in the user is given the assessment, which will pop up a modal at the end with different suggestions dependent on their score. The questions and assessment are pulled from <a href="http://www.apa.org/pi/about/publications/caregivers/practice-settings/assessment/tools/beck-depression.aspx">Beck's Depression Inventory</a>, which is a standard assessment within clincical psychology. The app will suggest different coping skills for users dependent on the answers to their assessment which I pulled from <a href="http://www.everydayhealth.com/hs/major-depression-living-well/cognitive-behavioral-therapy-techniques/">this article</a> on the topic. All icons on the results modal are from http://icons.iconarchive.com. The font used is <a href="https://fonts.google.com/specimen/Raleway?query=raleway">Raleway</a> from Google fonts. I relied on Bobby's lesson on authentication for a lot of the user login function on the app. I used <a href="http://www.w3schools.com/howto/howto_css_modals.asp">this resource</a> on building modals, Bobby's lesson on authentication for user login and a lot of support from Fizal.


##Flow Chart:
<img src="https://github.com/echerney/track/blob/master/Blank%20Flowchart%20-%20New%20Page.png?raw=true">


##User Stories:
-As a user with mild depressive symptoms, I want to be able to quantify my symptoms at the recommendation of my behavioral health practitioner.</br>
-As a user with mild depression, I want to find helpful tips for managing my tougher days.</br>
-As a user who takes prescriptions for my depression, I want to have reminders for taking my medicine.</br>
-As a user experiencing severe depression symptoms I want to be able to find nearby mental health facilities without even logging in, if necessary.</br>
-As a user with moderate depression, I want to know when my symptoms are dangerous and see nearby mental health facilities.</br>


##Wire frames:
<img src="https://github.com/echerney/track/blob/master/Screen%20Shot%202016-06-28%20at%2010.35.44%20PM.png?raw=true">
<img src="https://github.com/echerney/track/blob/master/Screen%20Shot%202016-06-28%20at%2010.44.15%20PM.png?raw=true">
<img src="https://github.com/echerney/track/blob/master/Screen%20Shot%202016-06-28%20at%2010.52.05%20PM.png?raw=true">
<img src="https://github.com/echerney/track/blob/master/Screen%20Shot%202016-06-28%20at%2011.06.02%20PM.png?raw=true">
<img src="https://github.com/echerney/track/blob/master/Screen%20Shot%202016-06-28%20at%2011.13.25%20PM.png?raw=true">

##API:
I'll be using the <a href="https://data.cityofnewyork.us/Health/Mental-Health-Service-Finder-Data/8nqg-ia7v">NYC open data</a>'s Mental Health service finder.

##MVP:
My priorities in the program will first to create a login for users with the user's name, email and password. The user then will be prompted with an assessment similar to Beck's Depression Inventory. Depending on the response of the score, there will be a suggestions page (or modal) created with some simple coping skills pulled from Cognitive Behavioral theory. If the score is very high or if certain booleans are marked as true (suicidal ideation, for example), then the user will be prompted to put in their zip code and a search of the API will pop up with places matching that zip code.
I would also like to add a few functional aspects, such as being able to pick up your location and search for nearby facilities. I would also like to make all of the app easy to use and generally calming style-wise in order to provide a safe and calm place for someone to assess their symptoms. The medication reminders would be the last priority (while it would be great). An alternative would be a suggestion within the modal for the user to set alarms on their phones as reminders for regular medication, or something of that sort.
