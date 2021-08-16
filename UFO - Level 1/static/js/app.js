// from data.js
var tableData = data;

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

    var filteredData = tableData.filter(dataEntry => dataEntry.datetime === inputValue || inputValue === "");

    console.log(filteredData);

    if (!filteredData.length) {
        console.log("No result")

        tbody.html("");

        tbody.text("No results for selected date. Please check date format is correct.");

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

    buildTable(tableData);

};



