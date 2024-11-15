import { Observer } from "../interfaces/Observer";
import { ObserverService } from "../interfaces/ObserverService";

export class EmailService implements ObserverService {
  public enviarEmail(observer: Observer, mensagem: string): void {
    console.log(
      `Enviado para ${observer.nome} - ${observer.email}}, Mensagem: ${mensagem}`
    );
  }
}
