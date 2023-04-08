"use strict";
function describe_city(city, country = "USA") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan"); // prints "Karachi is in Pakistan."
describe_city("New York"); // prints "New York is in USA."
describe_city("Paris", "France"); // prints "Paris is in France."
