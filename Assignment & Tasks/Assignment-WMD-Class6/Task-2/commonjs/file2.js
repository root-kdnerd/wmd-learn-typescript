"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRectangleArea(width, height) {
    return width * height;
}
function getCircleArea(radius) {
    return Math.PI * radius * radius;
}
module.exports = { getRectangleArea, getCircleArea };
