const log = console.log;
const br = console.log("\n\n");

const prod = [
  { name: "prod-1", price: 100 },
  { name: "prod-2", price: 200 },
  { name: "prod-3", price: 300 }
];

log("fp - map");
const map = (f, iter) => {
  let res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
};

log(map((p) => p.name, prod));
