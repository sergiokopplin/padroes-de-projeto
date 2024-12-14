"use strict";
/**
 * Visitor Design Pattern
 *
 * Intent: Lets you separate algorithms from the objects on which they operate.
 */
/**
 * Each Concrete Component must implement the `accept` method in such a way that
 * it calls the visitor's method corresponding to the component's class.
 */
class ConcreteComponentA {
    /**
     * Note that we're calling `visitConcreteComponentA`, which matches the
     * current class name. This way we let the visitor know the class of the
     * component it works with.
     */
    accept(visitor) {
        visitor.visitConcreteComponentA(this);
    }
    /**
     * Concrete Components may have special methods that don't exist in their
     * base class or interface. The Visitor is still able to use these methods
     * since it's aware of the component's concrete class.
     */
    exclusiveMethodOfConcreteComponentA() {
        return 'A';
    }
}
class ConcreteComponentB {
    /**
     * Same here: visitConcreteComponentB => ConcreteComponentB
     */
    accept(visitor) {
        visitor.visitConcreteComponentB(this);
    }
    specialMethodOfConcreteComponentB() {
        return 'B';
    }
}
/**
 * Concrete Visitors implement several versions of the same algorithm, which can
 * work with all concrete component classes.
 *
 * You can experience the biggest benefit of the Visitor pattern when using it
 * with a complex object structure, such as a Composite tree. In this case, it
 * might be helpful to store some intermediate state of the algorithm while
 * executing visitor's methods over various objects of the structure.
 */
class ConcreteVisitor1 {
    visitConcreteComponentA(element) {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
    }
    visitConcreteComponentB(element) {
        console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
    }
}
class ConcreteVisitor2 {
    visitConcreteComponentA(element) {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`);
    }
    visitConcreteComponentB(element) {
        console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`);
    }
}
/**
 * The client code can run visitor operations over any set of elements without
 * figuring out their concrete classes. The accept operation directs a call to
 * the appropriate operation in the visitor object.
 */
function clientCode(components, visitor) {
    // ...
    for (const component of components) {
        component.accept(visitor);
    }
    // ...
}
const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB(),
];
console.log('The client code works with all visitors via the base Visitor interface:');
const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);
console.log('');
console.log('It allows the same client code to work with different types of visitors:');
const visitor2 = new ConcreteVisitor2();
clientCode(components, visitor2);
