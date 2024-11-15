import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Newsletter implements Subject {
  protected observers: Observer[] = [];
  protected mensagens: string[] = [];

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((item) => item !== observer);
  }

  notifyObserver(): void {
    this.observers.forEach((observer) => {
      observer.update(this.mensagens[this.mensagens.length - 1]);
    });
  }

  addMensagem(mensagem: string): void {
    this.mensagens.push(mensagem);
    this.notifyObserver();
  }
}
