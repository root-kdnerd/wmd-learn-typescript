function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan"); // prints "Karachi is in Pakistan."
describe_city("New York"); // prints "New York is in USA."
describe_city("Paris", "France"); // prints "Paris is in France."
