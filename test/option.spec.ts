import { find, findIndex } from '../src/fp-ts';
import { isSome, none, some } from 'fp-ts/lib/Option';

describe('option', () => {
  test('none/some option', () => {
    const result = findIndex<number>([1, 2, 3, 4], (a: number) => a === 1);

    expect(isSome(result)).toStrictEqual(true);
    expect(result).toStrictEqual(some(0));
  });

  test('fromNullable option', () => {
    const result_1 = find<number>([1, 2, 3, 4], (a: number) => a === 4);
    const result_2 = find<number>([1, 2, 3, 4], (a: number) => a === 1);

    expect(isSome(result_1)).toStrictEqual(true);
    expect(result_2).toStrictEqual(none);
  });
});
