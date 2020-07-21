import { isSome, none, some } from 'fp-ts/lib/Option';
import { find, findIndex } from '../src/fp-ts';

describe('option', () => {
  test('none/some option', () => {
    const result = findIndex<number>([1, 2, 3, 4], (a: number) => a === 1);

    expect(isSome(result)).toStrictEqual(true);
    expect(result).toStrictEqual(some(0));
  });

  test('fromNullable option', () => {
    const resultOne = find<number>([1, 2, 3, 4], (a: number) => a === 4);
    const resultTwo = find<number>([1, 2, 3, 4], (a: number) => a === 5);

    expect(isSome(resultOne)).toStrictEqual(true);
    expect(resultTwo).toStrictEqual(none);
  });
});
