interface Array<T> {
    customSplice(start: number, deleteCount?: number, ...items: T[]): T[];
  }
  
  Array.prototype.customSplice = function<T>(
    start: number,
    deleteCount: number = this.length - start,
    ...items: T[]
  ): T[] {
    const deletedItems = this.slice(start, start + deleteCount);
    const remainingItems = [...this.slice(0, start), ...items, ...this.slice(start + deleteCount)];
    this.length = remainingItems.length;
    for (let i = 0; i < remainingItems.length; i++) {
      this[i] = remainingItems[i];
    }
    return deletedItems;
  };
  
  const fruits: string[] = ["apple", "banana", "cherry", "durian", "elderberry"];
  
  const deletedItems = fruits.customSplice(1, 2, "pineapple", "grape");
  
  console.log("Deleted items:", deletedItems);
  console.log("Updated array:", fruits);  



  // 1. Getting error on this.length - start --- implicit type any error but enabled and false the "noImplicitThis" option in tsconfig.json to resolve 
  // 2. Enable "noEmitOnError: true" in tsconfig.json to restrict transpiling