import { Option, some, none, fromNullable } from 'fp-ts/lib/Option';

export function findIndex<T>(
  as: T[],
  predicate: (a: T) => boolean
): Option<number> {
  const index = as.findIndex(predicate);
  return index === -1 ? none : some(index);
}

export function find<T>(as: T[], predicate: (a: T) => boolean): Option<T> {
  const finedItem: T = as.find(predicate) as T;
  return fromNullable<T>(finedItem);
}


