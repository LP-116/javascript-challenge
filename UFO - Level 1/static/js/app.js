// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function buildTable(data) {

    data.forEach((dataRow) => {
    
        const row = tbody.append("tr");


        Object.values(dataRow).forEach((val) => {
            row.append("td").text(val);
        }
        );
    });
}

buildTable(tableData);



