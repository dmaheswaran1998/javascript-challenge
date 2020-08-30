//from data.js
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

    //tre try except command is used to avoid null values
    try {
    var dateTime=d3.select("#datetime").property("value");
    }

    catch(TypeError) {
    var dateTime=""
    }

    try {
    var city=d3.select("#city").property("value");
    }
    
    catch(TypeError) {
    var city=""
    }

    try {
    var state=d3.select("#state").property("value");
    }
        
    catch(TypeError) {
    var state=""
    }

    try {
    var country=d3.select("#country").property("value");
    }
            
    catch(TypeError) {
    var country=""
    }

    try {
    var shape=d3.select("#shape").property("value");
    }
                
    catch(TypeError) {
    var shape=""
    }
    
    //filtered data filtered by each criteria if they are blank, the filter is basically skipped. 

    filteredData=tableData   

    if (dateTime!=="") {
        var filteredData = filteredData.filter(filteredData => filteredData.datetime === dateTime);
    } else { 
        var filteredData = filteredData
    }

    if (city!=="") {
        var filteredData = filteredData.filter(filteredData => filteredData.city === city);
    } else { 
        var filteredData = filteredData
    }

    if (state!=="") {
        var filteredData = filteredData.filter(filteredData => filteredData.state === state);
    } else { 
        var filteredData = filteredData
    }

    if (country!=="") {
        var filteredData = filteredData.filter(filteredData => filteredData.country === country);
    } else { 
        var filteredData = filteredData
    }

    if (shape!=="") {
        var filteredData = filteredData.filter(filteredData => filteredData.shape === shape);
    } else { 
        var filteredData = filteredData
    }

    console.log(filteredData);
    //getting the property element 

    filteredData.forEach((UFOSighting) => {
        var row = tbody.append('tr');
    
        Object.entries(UFOSighting).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
    

};