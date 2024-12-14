"use strict";
class Red {
    getColor() {
        return "red";
    }
}
class Circle {
    getShape() {
        return "circle";
    }
}
class ShapeWithColor {
    constructor(color, shape) {
        this.color = color;
        this.shape = shape;
    }
}
class RedCircle extends ShapeWithColor {
    draw() {
        console.log(`${this.color.getColor()} ${this.shape.getShape()}`);
    }
}
const redCircle = new RedCircle(new Red(), new Circle());
redCircle.draw();
