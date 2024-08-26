const ePalindromo = require('./palindromo');

test('a palavra "radar" é um palíndromo', () => {
  expect(ePalindromo('radar')).toBe(true);
});

test('a palavra "java" não é um palíndromo', () => {
  expect(ePalindromo('java')).toBe(false);
});

test('uma string vazia é considerada um palíndromo', () => {
  expect(ePalindromo('')).toBe(true);
});

test('o palíndromo "A man, a plan, a canal, Panama!" deve retornar true', () => {
  expect(ePalindromo('A man, a plan, a canal, Panama!')).toBe(true);
});
