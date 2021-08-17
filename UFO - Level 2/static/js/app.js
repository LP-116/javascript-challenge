// from data.js
var tableData = data;

// d3 to select the body of the html page.
var tbody = d3.select("tbody");


// creating a function to build the table containing all the data.
function buildTable(data) {

    data.forEach((dataRow) => {
    
        var row = tbody.append("tr");

        Object.values(dataRow).forEach((value) => {
            row.append("td").text(value);
        }
        );
    });
}

// running the build table function.
buildTable(tableData);

// Now using d3 to select the filter button and on the click of the filter button, the run filter function is executed.
var filterButton = d3.select("#filter-btn");

filterButton.on("click", runFilter)

// The runfilter function firstly prevents the page reloading.
// Next the datetime element is selected and the input value within the datetime element is determined.
// The city element, state element, country element and shape element are also selected and the input value within each field is determined.
// The filter is then completed based on the inputvalue. 
// If the input value matches a value in the table, that data is returned.
// If no date is entered into the field, the table displays all results.
// If the data entered does not appear in the table, text containing "No results for selected inputs." is returned.
// To complete the filtering "and" and "or" conditions were used. Basically it is saying if the input field matches the field in the table return that data 
// OR if that field is blank and the next field matches return that data etc.

function runFilter() {

    d3.event.preventDefault();

    var dateinputElement = d3.select("#datetime");
    var dateinputValue = dateinputElement.property("value");
    var cityinputElement = d3.select("#city");
    var cityinputValue = cityinputElement.property("value");
    var stateinputElement = d3.select("#state");
    var stateinputValue = stateinputElement.property("value");
    var countryinputElement = d3.select("#country");
    var countryinputValue = countryinputElement.property("value");
    var shapeinputElement = d3.select("#shape");
    var shapeinputValue = shapeinputElement.property("value");


    var filteredData = tableData.filter(dataEntry =>((dataEntry.datetime === dateinputValue || dateinputValue === "") &&
                                                    (dataEntry.city === cityinputValue || cityinputValue === "") &&
                                                    (dataEntry.state === stateinputValue || stateinputValue === "") &&
                                                    (dataEntry.country === countryinputValue || countryinputValue === "") &&
                                                    (dataEntry.shape === shapeinputValue || shapeinputValue === "")));
                                                 

    console.log(filteredData);

    if (!filteredData.length) {

        console.log("No result")

        tbody.html("");

        tbody.text("No results for selected inputs.");}

    else {
    
    tbody.html("");

    filteredData.forEach((dataEntry) => {

        var row = tbody.append("tr");

        Object.values(dataEntry).forEach((value) => {
            row.append("td").text(value);
        });
    });
};
};

// To give the user the chance to reset the table, a reset data button was created.
// This button when clicked, clears the table results and reruns the buildtable function. 

var filterButton2 =  d3.select("#filter-btn2");

filterButton2.on("click", resetFilter);

function resetFilter() {

    tbody.html("");

    document.querySelector("#datetime").value = '';
    document.querySelector("#city").value = '';
    document.querySelector("#state").value = '';
    document.querySelector("#country").value = '';
    document.querySelector("#shape").value = '';


    buildTable(tableData);

};



