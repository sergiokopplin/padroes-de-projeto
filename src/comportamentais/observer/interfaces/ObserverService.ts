import { Observer } from "./Observer";

export interface ObserverService {
  enviarEmail(observer: Observer, mensagem: string): void;
}
