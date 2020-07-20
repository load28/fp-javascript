const _ = require("./fx");

const go = (...args) => _.reducer((a, f) => f(a), args);

_.log(go(10, a => a + a, a => a / a));

// pipe 합성된 함수를 반환, 즉시 실행을 하지 않으며 함수를 받아서 실행함

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const f = pipe(
  (a, b) => a + b,
  a => a + a,
  a => a * a
);

_.log(f(1, 2));

const prod = [
  { name: "prod-1", price: 100 },
  { name: "prod-2", price: 200 },
  { name: "prod-3", price: 300 }
];

_.go(
  prod,
  prod => _.map(p => p.price, prod),
  prices => _.filter(p => p > 100, prices),
  prices => _.reducer((a, b) => a + b, prices),
  _.log
);
