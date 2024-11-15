# Strategy

## O que é?

O padrão de projetos Strategy define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis.
O Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam

## Quando Utilizar?

- Quando muitas classes diferentes fazem a mesma coisa de formas diferentes.
- Quando se necessita de variantes de algoritmo.
- Quando é necessário evitar a exposição de dados ou algoritmos sensíveis
- Remoção de operadores condicionais que determinam o comportamento do algoritmo com base em objetos diferentes

## Consequências

- Criação de família de Algoritmos
- O encapsulamento dos algoritmos nas classes Strategy
- Flexibilidade na escolha de qual estratégia utilizar
- Clientes devem conhecer as strategies
- Custo entre a comunicação Strategy e Context
- Aumento do número de classes na aplicação
