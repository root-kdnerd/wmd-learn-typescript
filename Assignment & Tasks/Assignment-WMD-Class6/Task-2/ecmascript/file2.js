"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAreaOfRectangle = exports.calculateAreaOfCircle = void 0;
function calculateAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}
exports.calculateAreaOfCircle = calculateAreaOfCircle;
function calculateAreaOfRectangle(length, breadth) {
    return length * breadth;
}
exports.calculateAreaOfRectangle = calculateAreaOfRectangle;
