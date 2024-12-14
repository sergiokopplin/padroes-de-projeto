"use strict";
/**
 * Real World Example for the Adapter Design Pattern
 *
 * Need: Interact with a Taxi price calculator that works with miles and £ with
 * a client that provide Kms and expect a price in €.
 *
 * Solution: Create an adapter that translates the input and output values into
 * the expected formats.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fares = exports.UKTaxiCalculatorLibrary = void 0;
/**
 * The Adaptee is an existing library that contains the logic that we want to
 * reuse.
 */
class UKTaxiCalculatorLibrary {
    getPriceInPounds(miles, fare) {
        if (fare === Fares.Airport) {
            return 5 + miles * 2.15;
        }
        return miles * 1.95;
    }
}
exports.UKTaxiCalculatorLibrary = UKTaxiCalculatorLibrary;
var Fares;
(function (Fares) {
    Fares[Fares["Standard"] = 0] = "Standard";
    Fares[Fares["Airport"] = 1] = "Airport";
})(Fares || (exports.Fares = Fares = {}));
/**
 * The Taxi Calculator Adapter makes the Adaptee's interface compatible with the
 * one that the client expects.
 */
class UKTaxiCalculatorLibraryAdapter {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    calculatePriceInEuros(km, isAirport) {
        const miles = km * 1.609;
        const fare = isAirport ? Fares.Airport : Fares.Standard;
        const pounds = this.adaptee.getPriceInPounds(miles, fare);
        const euros = pounds * 1.15;
        return euros;
    }
}
/**
 * The client code works with objects that implements the TaxiCalculator
 * interface, so we can use the adapter to reuse the incompatible library
 */
function client(taxiCalculator) {
    console.log('Calculating the price for a 15 Km run to the airport');
    const priceInEuros = taxiCalculator.calculatePriceInEuros(15, true);
    console.log(`Total price: ${priceInEuros}€`);
}
const incompatibleLibrary = new UKTaxiCalculatorLibrary();
const adaptedLibrary = new UKTaxiCalculatorLibraryAdapter(incompatibleLibrary);
client(adaptedLibrary);
