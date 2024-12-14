"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Document {
    constructor() {
        this.state = new DraftState(this);
    }
    changeState(state) {
        this.state = state;
    }
    render() {
        this.state.render();
    }
    publish() {
        this.state.publish();
    }
}
class DraftState {
    constructor(document) {
        this.document = document;
    }
    render() {
        console.log("Rendering the document in Draft state");
    }
    publish() {
        console.log("Moving the document to Moderation state");
        this.document.changeState(new ModerationState(this.document));
    }
}
class ModerationState {
    constructor(document) {
        this.document = document;
    }
    render() {
        console.log("Rendering the document in Moderation state");
    }
    publish() {
        console.log("Making the document public in Published state");
        this.document.changeState(new PublishedState(this.document));
    }
}
class PublishedState {
    constructor(document) {
        this.document = document;
    }
    render() {
        console.log("Rendering the document in Published state");
    }
    publish() {
        console.log("The document is already in Published state. Nothing to do.");
    }
}
const document = new Document();
document.render();
document.publish();
document.publish();
document.render();
document.publish();
