// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function buildTable(data) {

    data.forEach((dataRow) => {
    
        var row = tbody.append("tr");

        Object.values(dataRow).forEach((value) => {
            row.append("td").text(value);
        }
        );
    });
}

buildTable(tableData);

var filterButton = d3.select("#filter-btn");

filterButton.on("click", runFilter)

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

        tbody.text("No results for selected date");

    }

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



