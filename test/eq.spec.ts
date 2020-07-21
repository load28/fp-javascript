import { Eq } from 'fp-ts/lib/Eq';
import { contranMap, eqFn } from '../src/fp-ts/eq';

interface Point {
  xPoint: number;
  yPoint: number;
}

describe('eq', () => {
  test('eq', () => {
    const eqNumber: Eq<Point> = {
      equals: (xNum, yNum) => xNum.yPoint === yNum.yPoint
    };
    const a: Point = { yPoint: 1, xPoint: 1 };
    const b: Point = { xPoint: 1, yPoint: 1 };
    const c: Point = { xPoint: 1, yPoint: 2 };

    const resultOne = eqFn<Point>(a, b, eqNumber);
    const resultTwo = eqFn<Point>(a, c, eqNumber);

    expect(resultOne).toStrictEqual(true);
    expect(resultTwo).toStrictEqual(false);
  });

  test('contranmap', () => {
    type T = { a: number; b: string };
    const eq: Eq<string> = { equals: (x, y) => x === y };
    const compareObj = contranMap<T, string>(eq, (m) => m.b);
    const resultOne = compareObj.equals({ a: 1, b: '1' }, { a: 1, b: '1' });
    const resultTwo = compareObj.equals({ a: 1, b: '2' }, { a: 1, b: '3' });

    expect(resultOne).toStrictEqual(true);
    expect(resultTwo).toStrictEqual(false);
  });
});
