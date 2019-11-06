const fx = require("./fx.js");

const prod = [
  { name: "prod-1", price: 100 },
  { name: "prod-2", price: 200 },
  { name: "prod-3", price: 300 }
];
const add = (a, b) => a + b;
fx.log(
  fx.reducer(
    add,
    fx.map((a) => a.price, fx.filter((a) => a.price <= 1000, prod))
  )
);

fx.log(
  fx.reducer(add, fx.filter((a) => a < 1000, fx.map((a) => a.price, prod)))
);
