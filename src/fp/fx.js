const curry = f => (a, ...as) =>
  as.length ? f(a, ...as) : (...as) => f(a, ...as);

const map = curry((f, iter) => {
  let res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
});

const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const reducer = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

const go = curry((...args) => reducer((a, f) => f(a), args));

const pipe = curry((f, ...fs) => (...as) => go(f(...as), ...fs));

const log = console.log;

const gn = function*(value) {
  if (value instanceof Array) {
    for (const a of value) yield a;
  } else {
    yield value;
  }
};

module.exports = {
  filter,
  reducer,
  map,
  log,
  go,
  pipe,
  curry,
  gn
};
