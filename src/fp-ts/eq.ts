import { contramap, Eq } from 'fp-ts/lib/Eq';
import { fromNullable, getEq } from 'fp-ts/lib/Option';

export function eqFn<T>(x: T, y: T, eqNumber: Eq<T>): boolean {
  return getEq<T>(eqNumber).equals(fromNullable<T>(x), fromNullable<T>(y));
}

export function contranMap<T, R>(eq: Eq<R>, mapFn: (m: T) => R) {
  return contramap(mapFn)(eq);
}
