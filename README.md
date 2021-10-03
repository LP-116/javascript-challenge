# Javascript Challenge
## JavaScript and DOM Manipulation
## To view the bonus section webpage click [here](https://lp-116.github.io/javascript-challenge/index.html)

---
## Task

This task involved using Javascript, HTML, CSS and D3.js to create a webpage that creates a table dynamically based upon the dataset provided. 
The webpage needs to allow users to filter the table data for specific values.

There were 2 parts to this challenge. 

#### Part 1: Automatic Table and Date Search
Part 1 involved creating a basic HTML web page and then using the dataset provided writing code the appends a table to the webpage and then adds new rows of data for each UFO sighting. Columns for the table are date/time, city, state, country, shape and comment.

A date form is used in the HTML document and the Javascript code is required to listen for events and search through the date/time columns to find rows that match the user input.

#### Part 2: Multiple Search Categories
Part 2 adds multiple input tages to the equation so that the user can set multuple filters and search for UFO sightings.
The user can filter the dataset based on date/time, city, state, country, shape or a combination of any/all inputs.

---
## Method

For this assessment I designed a new HTML webpage by using the challenge example as a starting point and then changing the bootstrap theme/images/text/colors and adding a background image.

Firstly, the code creates a table showing all available data. This is completed by creating a buildTable function and then using the function on the dataset.
The function builds up empty rows for each data entry and then appends the dataset values into the table.

Next D3 is used to select the filter button and listening for the click event for the filter button a function called runRilter is executed.

The runfilter function firstly prevents the page reloading. Next the datetime element is selected and the input value within the datetime element is determined.
For part 2 the city element, state element, country element and shape element are also selected and the input value within each field is determined.
The filter is then completed based on the inputvalue(s). 
If the input value(s) match a value in the table, that data is returned. If no data is entered into the fields, the table displays all results.
If the data entered does not appear in the table, text containing "No result..." is returned.

To complete the filtering in the bonus section "and" and "or" conditions were used. Basically it is saying if the input field matches the field in the table return that data OR if that field is blank and the next field matches return that data etc.

##### Note: 
For Part 1: Added in the functionality that if the date field is left blank, the entire table will be displayed (i.e. it shows all results from the table).
For Part 2: Added in the functionality that if no field is entered, the entire table is displayed.

Also for Part 1 and Part 2 added in a reset data button to clear the filters and reset the table to the original dataset.

---
## Result

Filters work successfully upon clicking the filter button and data resets when clicking the reset button.

Example:

<img src="https://user-images.githubusercontent.com/82348616/129659041-17a5844e-73b9-435b-a681-cdf0902135d3.PNG" width="700">


---
## Files

There are 2 folders in this repository. 
* UFO - Level 1 contains the part 1 challenge (only one filter).
* UFO - Level 2 contains the part 2 challenge (multiple filters).

Inside each folder contains the index.html page and a static folder contain the js files, CSS files and images.
The code is located in the app.js file in the js folder.

The main branch of the reposititory also contains the index file for part 2 of the assignment to enable the file to be published on Github and allow viewers to test out the multiple filters page.


---
## References 

In the webpage the below resources were used:

For the floating stars background:

* Parallax Pixel Stars

https://codepen.io/saransh/pen/BKJun 

* Pusling animation bulk attributes came from the below: 

https://www.kevinleary.net/pulsating-css3-animations/

* For the UFO background image:

https://www.planeandpilotmag.com/news/pilot-talk/2020/06/16/alien-spacecraft-roswell-new-mexico/


* For the alien icon in the heading word:

https://www.freepik.com     title="Freepik" 
https://www.flaticon.com/   title="Flaticon"





