function make_sandwich(...items: string[]): void {
    console.log(`Your sandwich will have: ${items.join(', ')}`);
  }
  
  make_sandwich('turkey', 'cheddar cheese', 'lettuce', 'tomato');
  make_sandwich('roast beef', 'swiss cheese', 'mayonnaise');
  make_sandwich('peanut butter', 'jelly');
  