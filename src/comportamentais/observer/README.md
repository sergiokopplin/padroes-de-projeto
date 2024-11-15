# Observer ## O que é?

O Observer é um padrão de projeto de software que define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda seu estado, todos seus dependentes são notificados e atualizados automaticamente.

Exemplo: Implementação de uma Newsletter onde clientes, funcionários, parceiros e fornecedores podem se inscrever para receber emails de notícias sobre a determinada empresa.

## Quanto utilizar?

- Quando uma abstração tem dois aspectos, um depende do outro, e é necessário que eles possam variar e serem reutilizados independentemente.
- Quando uma alteração em um objeto requer a alteração de outros, e não se conhece quantos objetos precisam ser alterados.
- Quando um objeto deve ser capaz de notificar outros objetos sem os conhecer, ou seja, tais objetos não podem ser fortemente acoplados.

## Consequências

- O padrão Observer permite variar assuntos (subject) e observadores (observers) de forma independente. É possível reutilizar assuntos sem reutilizar seus observadores e vice-versa. Também permite adicionar observadores sem modificar o assunto ou outros observadores.
- Acoplamento abstrato entre Assunto e Observador. Tudo que um assunto sabe é que ele possui uma lista de observadores, cada um em conformidade com a interface Observer. O assunto não conhece a classe concreta de nenhum observador. Assim, o acoplamento entre assunto e seus observadores é abstrato e mínimo.
- Suporte para comunicação via broadcast. Ao contrário de uma solicitação comum, a notificação que um assunto envia não precisa especificar seu destinatário. A notificação é transmitida automaticamente para todos os objetos observadores que se inscreveram. O assunto não se importa com quantos objetos interessados existem, sua única responsabilidade é notificar seus observadores. Isso lhe dá a liberdade de adicionar e remover observadores a qualquer momento. Cabe ao observador manipular ou ignorar uma notificação.
- Pode causar atualizações inesperadas. Como os observadores não se conhecem, uma operação simples sobre o assunto pode causar uma cascata de atualizações em seus observadores e seus objetos dependentes. Além disso, critérios de dependência que não são bem gerenciados geralmente levam a atualizações desnecessárias, que podem ser difíceis de rastrear.
