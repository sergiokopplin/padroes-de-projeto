"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor({ nome, email, subject, emailService, }) {
        this._nome = nome;
        this._email = email;
        this.subject = subject;
        this.emailService = emailService;
        this.subject.registerObserver(this);
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    update(mensagem) {
        this.emailService.enviarEmail(this, mensagem);
    }
}
exports.Cliente = Cliente;
