const product = [
  { name: "a", price: 1000 },
  { name: "a", price: 1000 },
  { name: "a", price: 1000 },
  { name: "a", price: 1000 },
  { name: "a", price: 1000 }
];

let under2000 = [];
for (const a of product) {
  if (a.price < 2000) under2000.push(a);
}

const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};
console.log(filter((a) => a.price === 1000, product));

const reducer = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

console.log(reducer((a, b) => a + b, 0, [1, 2, 3, 4, 5]));
console.log(reducer((a, b) => a + b, [1, 2, 3, 4, 5]));
