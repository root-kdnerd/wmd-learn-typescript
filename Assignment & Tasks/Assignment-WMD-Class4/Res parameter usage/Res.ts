function add(a: number, b: number, res: (result: number) => void) {
    const sum = a + b;
    res(sum);
  }
  
  function subtract(a: number, b: number, res: (result: number) => void) {
    const difference = a - b;
    res(difference);
  }
  
  add(15, 0.23567, (result) => {
    console.log("The sum is: " + result);
  });
  
  subtract(10, 4, (result) => {
    console.log("The difference is: " + result);
  });  