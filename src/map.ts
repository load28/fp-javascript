const log = console.log;

const curry = (f: any) => (a: any, ...as: any[]) =>
  as.length ? f(a, ...as) : (...newAs: any[]) => f(a, ...newAs);

const emptyIter = (function* () {})();
const emptyL = () => emptyIter;

const goOne = (a: any, f: any) => (a instanceof Promise ? a.then(f) : f(a));
const nop = Symbol.for('nop');

const toIter = (iter: any) =>
  iter && iter[Symbol.iterator] ? iter[Symbol.iterator]() : emptyL();

const reduce = curry((f: any, acc: any, iter: any) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const v of iter) {
    acc = f(acc, v);
  }
  return acc;
});

const noCurry = <I, O>(
  f: (a: I, b: I) => O,
  acc: any,
  iter?: IterableIterator<I>
): O => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    // @ts-ignore
    acc = iter.next().value;
  }

  // @ts-ignore
  for (const v of iter) {
    acc = f(acc, v);
  }
  return acc;
};

const mapL = curry(function* mapL(f: any, iter: any) {
  for (const v of toIter(iter)) {
    yield goOne(v, f);
  }
});

const filterL = curry(function* filterL(f: any, iter: any) {
  for (const a of toIter(iter)) {
    const r = goOne(a, f);
    if (r instanceof Promise) yield r.then(c => (c ? a : Promise.reject(nop)));
    else if (r) yield a;
  }
});

const take = curry((l: any, iter: any): any => {
  if (l < 1) return [];
  const res: any[] = [];
  iter = toIter(iter);
  return (function recur(): any {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      if (a instanceof Promise) {
        return a
          .then(a => ((res.push(a), res).length === l ? res : recur()))
          .catch(e => (e === nop ? recur() : Promise.reject(e)));
      }
      res.push(a);
      if (res.length === l) return res;
    }
    return res;
  })();
});

const takeAll = (iter: any) => take(Infinity, iter);

const map = curry((f: any, iter: any) => {
  return takeAll(mapL(f, iter));
});

const filter = curry((f: any, iter: any) => {
  return takeAll(filterL(f, iter));
});

const go = curry((...args: any[]) => reduce((a: any, f: any) => f(a), args));

const pipe = curry((f: any, ...fs: any[]) => (...as: any[]) =>
  go(f(...as), ...fs)
);

go(
  [1, 2, 3, 4],
  map((n: number) => n * n),
  filter((n: number) => 10 < n),
  log
);

go(
  [1, 2, 3, 4],
  reduce((a: number, b: number) => a + b),
  log
);

const num = noCurry<number, number>((a, b) => a + b, [1, 2, 34]);
console.log(num);
const p = pipe((n: number) => n * n, log);
p(10);
