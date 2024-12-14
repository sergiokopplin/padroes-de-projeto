"use strict";
class ModernChair {
    sitOn() {
        console.log("Sitting on a modern chair.");
    }
}
class ModernSofa {
    lieOn() {
        console.log("Lying on a modern sofa.");
    }
}
class ModernCoffeeTable {
    putCoffee() {
        console.log("Placing coffee on a modern coffee table.");
    }
}
class VictorianChair {
    sitOn() {
        console.log("Sitting on a Victorian chair.");
    }
}
class VictorianSofa {
    lieOn() {
        console.log("Lying on a Victorian sofa.");
    }
}
class VictorianCoffeeTable {
    putCoffee() {
        console.log("Placing coffee on a Victorian coffee table.");
    }
}
class ModernFurnitureFactory {
    createChair() {
        return new ModernChair();
    }
    createSofa() {
        return new ModernSofa();
    }
    createCoffeeTable() {
        return new ModernCoffeeTable();
    }
}
class VictorianFurnitureFactory {
    createChair() {
        return new VictorianChair();
    }
    createSofa() {
        return new VictorianSofa();
    }
    createCoffeeTable() {
        return new VictorianCoffeeTable();
    }
}
function createFurniture(factory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const coffeeTable = factory.createCoffeeTable();
    chair.sitOn();
    sofa.lieOn();
    coffeeTable.putCoffee();
}
createFurniture(new ModernFurnitureFactory());
createFurniture(new VictorianFurnitureFactory());
