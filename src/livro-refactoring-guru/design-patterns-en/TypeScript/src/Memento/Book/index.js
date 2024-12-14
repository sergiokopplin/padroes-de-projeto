"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Editor {
    constructor(name) {
        this.name = name;
        this.text = "";
    }
    makeSnapshot() {
        return new Snapshot(this.name, this.text);
    }
    restore(memento) {
        this.text = memento.getText();
    }
    editText(newText) {
        this.text = newText;
    }
    displayText() {
        console.log("Current Text: " + this.text);
    }
}
class Snapshot {
    constructor(name, text) {
        this.name = name;
        this.text = text;
        this.date = new Date();
    }
    getName() {
        return this.name;
    }
    getSnapshotDate() {
        return this.date;
    }
    getText() {
        return this.text;
    }
}
const editor = new Editor("Document 1");
editor.editText("This is the initial text");
editor.displayText();
const snapshot1 = editor.makeSnapshot();
editor.editText("Text after editing");
editor.displayText();
editor.restore(snapshot1);
editor.displayText();
