"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
class EmailService {
    enviarEmail(observer, mensagem) {
        console.log(`Enviado para ${observer.nome} - ${observer.email}}, Mensagem: ${mensagem}`);
    }
}
exports.EmailService = EmailService;
