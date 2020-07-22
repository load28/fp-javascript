export const curry = <I, O>(f: any) => (a: I, ...as: any[]): O =>
  as.length ? f(a, ...as) : (...as: any[]) => f(a, ...as);

export function map<I, O>(list: I[], fn: (t: I) => O): O[] {
  return list.map(fn);
}

export function filter<I>(list: I[], fn: (t: I) => boolean): I[] {
  return list.filter(fn);
}

export function flatMap<I, O>(list: I[], fn: (t: I) => O[]): O[] {
  return list.map(fn).reduce((prev, current) => [...prev, ...current]);
}

export function goSync<I, O>(...as: any[]): O {
  return as.reduce((a: I, f: (p: any) => O) => f(a));
}

export function go<I, O>(...as: any[]) {
  return curry(goSync<I, O>(...as));
}
