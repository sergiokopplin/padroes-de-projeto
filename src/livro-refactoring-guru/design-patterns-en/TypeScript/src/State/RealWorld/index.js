"use strict";
/**
 * Real World Example for the State design pattern
 *
 * Need: To implement a controller for a multi-product vending machine
 *
 * Solution: To create a finite state machine that controls the possible states
 * and transitions.
 */
/**
 * The Context defines the interface of interest to clients. It also maintains a
 * reference to an instance of a State subclass, which represents the current
 * state of the Context.
 */
class VendingMachineContext {
    constructor(state) {
        this.credit = 0;
        this.inventory = INITIAL_INVENTORY;
        this.transitionTo(state);
    }
    /**
     * Some context public methods that the state will interact with
     */
    addCredit(credit) {
        this.credit += credit;
        console.log(`Credit is now ${this.credit}`);
    }
    resetCredit() {
        this.credit = 0;
        console.log('Credit has been reset');
    }
    hasStockOf(product) {
        return this.inventory.items.some(i => i.product.name === product.name && i.items > 0);
    }
    isOutOfStock() {
        return !this.inventory.items.some(i => i.items > 0);
    }
    dispenseProduct(product) {
        if (product.value > this.credit) {
            throw new Error(`You are trying to buy a product with price ${product.value} but your credit is only ${this.credit}`);
        }
        if (!this.hasStockOf(product)) {
            throw new Error(`No ${product.name} products left, select another one`);
        }
        const inventoryItem = this.inventory.items.find(i => i.product.name === product.name);
        const newInventoryItem = {
            product,
            items: inventoryItem.items - 1,
        };
        const restOfInventory = this.inventory.items.filter(i => i.product.name !== product.name);
        this.inventory.items = [...restOfInventory, newInventoryItem];
        console.log(`Product ${product.name} dispensed. Inventory is now:`, this.inventory.items);
        this.resetCredit();
    }
    /**
     * The Context allows changing the State object at runtime.
     */
    transitionTo(state) {
        console.log(`Context: Transition to ${state.constructor.name}.`);
        this.state = state;
        this.state.setContext(this);
    }
    /**
     * The Context delegates part of its behavior to the current State
     */
    insertCoin(coin) {
        this.state.insertCoin(coin);
    }
    selectProduct(product) {
        this.state.selectProduct(product);
    }
}
/**
 * The base State class declares methods that all Concrete State should
 * implement and also provides a backreference to the Context object, associated
 * with the State. This backreference can be used by States to transition the
 * Context to another State.
 */
class State {
    setContext(context) {
        this.context = context;
    }
}
/**
 * We will implement only 3 states. States are only responsible for the state
 * transitions. We will delegate all the actions to the context, following the
 * 'tell don't ask' principle.
 */
class InitialReadyState extends State {
    insertCoin(coin) {
        this.context.addCredit(coin.value);
        this.context.transitionTo(new TransactionStarted());
    }
    selectProduct(_) {
        throw new Error('You should insert coins before selecting the product');
    }
}
class TransactionStarted extends State {
    insertCoin(coin) {
        this.context.addCredit(coin.value);
    }
    selectProduct(product) {
        this.context.dispenseProduct(product);
        if (this.context.isOutOfStock()) {
            this.context.transitionTo(new OutOfStock());
        }
        else {
            this.context.transitionTo(new InitialReadyState());
        }
    }
}
class OutOfStock extends State {
    insertCoin(_) {
        throw new Error('Stop inserting coins, we completely run out of stock');
    }
    selectProduct(_) {
        throw new Error('Stop selecting products, we completely run of stock');
    }
}
/**
 * Constants to reuse throughtout the application
 */
const SODA = {
    name: 'Soda',
    value: 15,
};
const NUTS = {
    name: 'Nuts',
    value: 25,
};
const INITIAL_INVENTORY = {
    items: [
        { product: SODA, items: 2 },
        { product: NUTS, items: 0 },
    ],
};
const NICKEL = { name: 'nickel', value: 5 };
const DIME = { name: 'dime', value: 10 };
/**
 * The client code should handle edge cases and errors, in this case, only to
 * log them to the console output
 */
const context = new VendingMachineContext(new InitialReadyState());
const handleError = (error) => {
    console.error(error.message);
};
try {
    context.selectProduct(NUTS);
}
catch (error) {
    handleError(error);
}
context.insertCoin(DIME);
try {
    context.selectProduct(SODA);
}
catch (error) {
    handleError(error);
}
context.insertCoin(NICKEL);
context.selectProduct(SODA);
context.insertCoin(DIME);
context.insertCoin(NICKEL);
try {
    context.selectProduct(SODA);
}
catch (error) {
    handleError(error);
}
try {
    context.insertCoin(NICKEL);
}
catch (error) {
    handleError(error);
}
