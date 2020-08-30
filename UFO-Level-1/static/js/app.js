// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(tableData);

// log each UFO sighting and append to a rwo
data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
    //logging key-value pairs 
    Object.entries(UFOSighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});


//Setting up the button 
// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

//Defining the function
function runEnter(){
    
    //clear the table body 
    d3.select("tbody").html("");

    // Prevent refreshing 
    d3.event.preventDefault();

    //Select input element and value
    var dateTime=d3.select("#datetime").property("value");

    var filteredDateData = tableData.filter(tableData => tableData.datetime === dateTime);
    console.log(filteredDateData);
    //getting the property element 

    filteredDateData.forEach((UFOSighting) => {
        var row = tbody.append('tr');
    
        Object.entries(UFOSighting).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });

};

