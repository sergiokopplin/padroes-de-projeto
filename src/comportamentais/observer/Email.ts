import { Observer } from "./Observer";

export class Email {
  public static enviarEmail(observer: Observer, mensagem: string): void {
    console.log(
      `Enviado para ${observer.getNome()} - ${observer.getEmail()}}, Mensagem: ${mensagem}`
    );
  }
}
