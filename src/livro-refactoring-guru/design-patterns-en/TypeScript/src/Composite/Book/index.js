"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
class Box {
    constructor(name, packagingCost) {
        this.name = name;
        this.packagingCost = packagingCost;
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i !== item);
    }
    getPrice() {
        return (this.packagingCost +
            this.items.reduce((acc, item) => acc + item.getPrice(), 0));
    }
}
const smallProduct = new Product("Small Product", 10);
const smallBox = new Box("Small Box", 1);
smallBox.addItem(smallProduct);
const bigProduct = new Product("Big Product", 100);
const bigBox = new Box("Big Box", 5);
bigBox.addItem(bigProduct);
bigBox.addItem(smallBox);
console.log(bigBox.getPrice());
