function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var my_car = car_info("Honda", "Civic", ["color", "blue"], ["sunroof", true]);
console.log(my_car);
