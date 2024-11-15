# Template Method

## O que é?

O padrão de projetos Template Method define o esqueleto de um algoritmo dentro de um método, transferindo alguns de seus passos para subclasses. O template method permite que as subclasses redefinam certos passos de um algoritmo sem alterar a estrutura do mesmo.

Exemplo: ​Implementação de um módulo de pagamentos do sistema de uma loja de confecções. Cada tipo de pagamento aplica diferentes taxas e descontos ao seu valor.

Ele também pode conter:

- Métodos concretos: Implementados na própria classe abstrata onde o template method se encontra
- Métodos Abstratos: Implementados nas subclasses
- Operações primitivas e funções da linguagem
- Outros templates Methods
- Hooks

## Quando Utilizar?

- Para implementar partes invariantes de um algoritmo apenas uma vez, deixando as subclasses apenas a implementação daquilo que pode variar
- Controlar extensões de subclasses, sabendo o que as subclasses devem implementar e até onde devem implementar
- Evitar duplicação de código entre classes comuns

## Consequências

Os templates methods:

- São uma técnica fundamental para a reutilização de código. São os meios para definir comportamento comum entre classes
- Proporcionam a inversão de dependência
- Permitem controlar a sequência da execução de métodos das subclasses
- Possibilitam ter pontos que chamam código ainda não implementado
