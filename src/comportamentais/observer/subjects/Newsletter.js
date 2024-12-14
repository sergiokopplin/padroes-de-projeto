"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter = void 0;
class Newsletter {
    constructor() {
        this.observers = [];
        this.mensagens = [];
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter((item) => item !== observer);
    }
    notifyObserver() {
        this.observers.forEach((observer) => {
            observer.update(this.mensagens[this.mensagens.length - 1]);
        });
    }
    addMensagem(mensagem) {
        this.mensagens.push(mensagem);
        this.notifyObserver();
    }
}
exports.Newsletter = Newsletter;
