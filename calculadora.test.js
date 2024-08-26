const { soma, subtracao, multiplicacao, divisao } = require('./calculadora');

test('soma de 1 e 2 é 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('subtração de 5 por 3 é 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('multiplicação de 4 e 3 é 12', () => {
  expect(multiplicacao(4, 3)).toBe(12);
});

test('divisão de 6 por 2 é 3', () => {
  expect(divisao(6, 2)).toBe(3);
});

test('divisão por zero deve lançar erro', () => {
  expect(() => divisao(1, 0)).toThrow('Divisão por zero');
});
