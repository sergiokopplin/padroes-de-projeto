export interface Observer {
  update(mensagem: string): void;
  get nome(): string;
  set nome(value: string);
  get email(): string;
  set email(value: string);
}
