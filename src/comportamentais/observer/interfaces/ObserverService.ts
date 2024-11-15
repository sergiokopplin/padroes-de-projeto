import { Observer } from "./interfaces/Observer";

export interface ObserverService {
  enviarEmail(observer: Observer, mensagem: string): void;
}
