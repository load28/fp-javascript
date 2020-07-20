import { Option, some, none } from 'fp-ts/lib/Option';

export function findIndex<T>(
  as: T[],
  predicate: (a: T) => boolean
): Option<number> {
  const index = as.findIndex(predicate);
  return index === -1 ? none : some(index);
}
