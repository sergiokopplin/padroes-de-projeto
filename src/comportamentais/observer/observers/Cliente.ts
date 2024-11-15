import { EmailService } from "../services/Email";
import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";

export class Cliente implements Observer {
  private _nome: string;
  private _email: string;
  private subject: Subject;
  private emailService: EmailService;

  constructor({
    nome,
    email,
    subject,
    emailService,
  }: {
    nome: string;
    email: string;
    subject: Subject;
    emailService: EmailService;
  }) {
    this._nome = nome;
    this._email = email;

    this.subject = subject;
    this.emailService = emailService;

    this.subject.registerObserver(this);
  }

  public get nome(): string {
    return this._nome;
  }

  public set nome(value: string) {
    this._nome = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public update(mensagem: string): void {
    this.emailService.enviarEmail(this, mensagem);
  }
}
