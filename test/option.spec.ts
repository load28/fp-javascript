import { findIndex } from '../src/fp-ts';
import { isSome, some } from 'fp-ts/lib/Option';

describe('option', () => {
  test('basic option', () => {
    const result = findIndex<number>([1, 2, 3, 4], (a: number) => a === 1);
    expect(isSome(result)).toStrictEqual(true);
    expect(result).toStrictEqual(some(0));
  });
});
