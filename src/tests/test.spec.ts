import { soma } from '../controllers/soma';

test('ola', () => {
  expect(soma(2, 3)).toBe(5);
})