"use strict";
function calculateDiscount(productPrice, discountPercentage) {
    if (discountPercentage >= 50) {
        console.log("Error: Invalid discount percentage.");
        return;
    }
    const discountAmount = productPrice * (discountPercentage / 100);
    const finalPrice = productPrice - discountAmount;
    console.log(`Original price: $${productPrice.toFixed(2)}`);
    console.log(`Discount percentage: ${discountPercentage}%`);
    console.log(`Discount amount: $${discountAmount.toFixed(2)}`);
    console.log(`Final price: $${finalPrice.toFixed(2)}`);
}
calculateDiscount(100, 10); // original price: $100.00, discount percentage: 10%, discount amount: $10.00, final price: $90.00
calculateDiscount(50, 25); // original price: $50.00, discount percentage: 25%, discount amount: $12.50, final price: $37.50
calculateDiscount(200, 60); // Error: Invalid discount percentage.
