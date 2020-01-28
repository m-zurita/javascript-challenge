// Link to body
var tableBody = d3.select("tbody");

// Function to fill table with data
function tableValues(data) {
    data.forEach(ufoSightings => {
        console.log(ufoSightings);
        let row = tableBody.append("tr");
        Object.entries(ufoSightings).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

// Function for filtering from user input 
function dateFilter() {
    let inputText = d3.select("#datetime").node().value;
    let tables = d3.select(".ufos-table");
    let subData = data.filter(d => d.datetime === inputText)
    console.log(subData)
    tableBody.html("")
    tableValues(subData);
}

d3.select("#filter-btn").on("click", dateFilter);

tableValues(data);