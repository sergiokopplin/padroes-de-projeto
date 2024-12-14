"use strict";
/**
 * Real World Example for the Template Method design pattern
 *
 * Need: To format an invoice for different outputs
 *
 * Solution: All components should have the ability to clone themselves
 */
class Invoice {
    constructor(_customer) {
        this._customer = _customer;
        this._lines = [];
        this._notes = '';
    }
    addLine(newLine) {
        this._lines = [...this._lines, newLine];
    }
    get taxes() {
        return this.subtotal * this.customer.country.vat;
    }
    get subtotal() {
        return this._lines.reduce((acc, currLine) => (acc + currLine.unitPrice * currLine.units), 0);
    }
    get total() {
        return this.subtotal + this.taxes;
    }
    get lines() {
        return this._lines;
    }
    get customer() {
        return this._customer;
    }
    get notes() { return this._notes; }
    set notes(notes) {
        this._notes = notes;
    }
}
/**
 * The abstract formatter holds the template method and the hook methods for
 * each step
 */
class InvoiceFormatter {
    constructor(invoice) {
        this.invoice = invoice;
    }
    format() {
        return `
${this.formatHeader()}
${this.hookFormatSubHeader()}
${this.formatCustomer()}
${this.formatInvoiceLines()}
${this.formatTaxes()}
${this.formatTotal()}
${this.formatFooter()}
${this.hookFormatSubFooter()}
`;
    }
    /* These operations have already a default implementation */
    hookFormatSubHeader() { return ''; }
    formatTotal() {
        return `Total: ${this.invoice.total}€`;
    }
    hookFormatSubFooter() { return ''; }
}
/* Concrete classes implement all abstract operations of the base class and also
   override some of the operations with default implementation */
class HtmlInvoiceFormatter extends InvoiceFormatter {
    formatHeader() {
        return '<h1>ACME S.L. Invoice</h1>';
    }
    hookFormatSubHeader() {
        return '</hr>';
    }
    formatCustomer() {
        return `<div id='customer'>Customer: ${this.invoice.customer.name}, id: ${this.invoice.customer.id}</div>`;
    }
    formatInvoiceLines() {
        return `<ul>\n${this.invoice.lines.map(l => (`  <li>${l.product}, units=${l.units}, amount=${l.units * l.unitPrice}€</li>`)).join('\n')}</ul>`;
    }
    formatTaxes() {
        return `<div>Taxes: ${this.invoice.taxes}€</div>`;
    }
    formatFooter() {
        return `<footer>Center Avenue, 42, Rockland  -  ${new Date().getFullYear()}</footer>`;
    }
}
class MarkdownInvoiceFormatter extends InvoiceFormatter {
    formatHeader() {
        return '#ACME S.L. Invoice';
    }
    hookFormatSubHeader() {
        return '---';
    }
    formatCustomer() {
        return `Customer: **${this.invoice.customer.name}**, id: ${this.invoice.customer.id}`;
    }
    formatInvoiceLines() {
        return `${this.invoice.lines.map(l => (`*${l.product}, units=${l.units}, amount=${l.units * l.unitPrice}€`)).join('\n')}`;
    }
    formatTaxes() {
        return `Taxes: ${this.invoice.taxes}€`;
    }
    formatFooter() {
        return `Center Avenue, 42, Rockland  -  ${new Date().getFullYear()}`;
    }
    formatTotal() {
        return `**Total**: ${this.invoice.total}€`;
    }
    hookFormatSubFooter() {
        return '---';
    }
}
/**
 * The client code defines some constants and use the concrete classes calling
 * the template method
 */
const SPAIN = {
    name: 'Spain',
    vat: 0.21,
};
const AMAZON = {
    name: 'Amazon Spain',
    id: 'amazon-spain',
    country: SPAIN,
};
const INVOICE = new Invoice(AMAZON);
INVOICE.addLine({ product: 'Nuts', units: 3, unitPrice: 5 });
INVOICE.addLine({ product: 'Still water', units: 10, unitPrice: 2 });
INVOICE.addLine({ product: 'Sandwich', units: 1, unitPrice: 10 });
console.log('Formatting in HTML');
console.log(new HtmlInvoiceFormatter(INVOICE).format());
console.log('\nFormatting in Markdown');
console.log(new MarkdownInvoiceFormatter(INVOICE).format());
