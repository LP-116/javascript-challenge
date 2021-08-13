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

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    // console.log(inputValue);
    // console.log(tableData);

    // if inputValue 

    var filteredData = tableData.filter(dataEntry => dataEntry.datetime === inputValue);

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





