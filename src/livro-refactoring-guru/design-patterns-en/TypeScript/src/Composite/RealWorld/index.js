"use strict";
/**
 * Real World Example for the Composite Design Pattern
 *
 * Need: Calculate the total price of a shipment of packages that can contain
 * other packages
 *
 * Solution: Create a common interface for the package that contains only
 * products (leafs) and the package that contains other packages
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductLeaf = exports.PackageComponent = void 0;
/**
 * The base Package (Component) class declares the common operations. Removed
 * the reference to the parent as in this example is not needed.
 */
class PackageComponent {
    constructor(title) {
        this.title = title;
    }
    add(packageComponent) { }
    remove(packageComponent) { }
    isComposite() {
        return false;
    }
}
exports.PackageComponent = PackageComponent;
/**
 * The Product (Leaf) class only has the getPrice implementation
 */
class ProductLeaf extends PackageComponent {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
exports.ProductLeaf = ProductLeaf;
/**
 * The MultiPackage (Composite) class represents a complex package that contains
 * other packages
 */
class MultiPackageComposite extends PackageComponent {
    constructor() {
        super(...arguments);
        this.childrenPackages = [];
    }
    add(packageComponent) {
        this.childrenPackages.push(packageComponent);
    }
    remove(packageComponent) {
        const index = this.childrenPackages.indexOf(packageComponent);
        this.childrenPackages.splice(index, 1);
    }
    isComposite() {
        return true;
    }
    getPrice() {
        return this.childrenPackages.reduce((prev, curr) => prev + curr.getPrice(), 0);
    }
}
/**
 * The client code always works with base Package components
 */
const galaxyPackage = getGalaxyS68Pack();
const canonPackage = getCanonM50Pack();
const simpleHeadphonesPackage = getHeadphones();
const mainShipment = new MultiPackageComposite('Main Shipment');
mainShipment.add(galaxyPackage);
mainShipment.add(canonPackage);
mainShipment.add(simpleHeadphonesPackage);
console.log(`Total shipment cost: ${mainShipment.getPrice()}€`);
/**
 * Helper (builder) functions hide there are 2 concrete package components
 */
function getGalaxyS68Pack() {
    const complexMobilePackage = new MultiPackageComposite('Galaxy S68 Pack');
    complexMobilePackage.add(new ProductLeaf('Galaxy S68', 900));
    complexMobilePackage.add(new ProductLeaf('S68 Charger', 25));
    complexMobilePackage.add(new ProductLeaf('S68 Case', 15));
    return complexMobilePackage;
}
function getCanonM50Pack() {
    const complexCameraPackage = new MultiPackageComposite('Canon M50 Pack');
    complexCameraPackage.add(new ProductLeaf('Canon M50', 600));
    complexCameraPackage.add(new ProductLeaf('A50 1.8 Lens', 250));
    complexCameraPackage.add(new ProductLeaf('128 Gb Micro SD', 40));
    complexCameraPackage.add(new ProductLeaf('Canon Generic Case', 150));
    return complexCameraPackage;
}
function getHeadphones() {
    return new ProductLeaf('HyperX Cloud Flight', 150);
}
