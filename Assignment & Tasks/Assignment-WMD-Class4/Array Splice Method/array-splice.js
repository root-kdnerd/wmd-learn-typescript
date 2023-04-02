"use strict";
Array.prototype.customSplice = function (start, deleteCount = this.length - start, ...items) {
    const deletedItems = this.slice(start, start + deleteCount);
    const remainingItems = [...this.slice(0, start), ...items, ...this.slice(start + deleteCount)];
    this.length = remainingItems.length;
    for (let i = 0; i < remainingItems.length; i++) {
        this[i] = remainingItems[i];
    }
    return deletedItems;
};
const fruits = ["apple", "banana", "cherry", "durian", "elderberry"];
const deletedItems = fruits.customSplice(1, 2, "pineapple", "grape");
console.log("Deleted items:", deletedItems);
console.log("Updated array:", fruits);
