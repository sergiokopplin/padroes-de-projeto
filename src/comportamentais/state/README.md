# State

O padrão de projeto State permite que um objeto altere o seu
comportamento quando o seu estado interno muda. O objeto parecerá ter
mudado de classe.

## Aplicabilidade (Quando utilizar?)

- Quando o comportamento de um objeto depende do seu estado interno, e com base nele muda seu comportamento em tempo de execução.
- Quando operações possuírem instruções condicionais grandes que dependam do estado interno do objeto. Frequentemente várias destas operações terão a mesmas estruturas condicionais.

## Consequências

- O padrão State encapsula o comportamento específico de um estado, e como o objeto de contexto deve se comportar em cada estado. O padrão coloca todo o comportamento associado a um estado específico em um objeto separado, assim, todo código referente a tal comportamento fica em uma subclasse EstadoConcreto. Novos estados podem ser adicionados facilmente, apenas definindo novas subclasses EstadoConcreto.
- As transições de estado se tornam explícitas. Quando um objeto define seu estado atual apenas em termos de valores de dados internos (constantes ou inteiros), suas transições de estado não têm representação explícita. Tais valores aparecem somente como atribuições para algumas variáveis.
- Estados podem proteger seu contexto interno de transições de inconsistências, porque as transições são processadas a nível de estado e não no objeto de contexto.
