function car_info(manufacturer: string, model: string, ...options: [string, any][]): {[key: string]: any} {
    let car = {manufacturer, model};
    for (let [key, value] of options) {
      car[key] = value;
    }
    return car;
  }
  
  let my_car = car_info("Honda", "Civic", ["color", "blue"], ["sunroof", true]);
  console.log(my_car);  