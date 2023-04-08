"use strict";
function car_info(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}
let my_car = car_info("Honda", "Civic", ["color", "blue"], ["sunroof", true]);
console.log(my_car);
