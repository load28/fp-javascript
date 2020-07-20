const _ = require("./fx.js");

const range = _ => {
  let res = [];
  let i = -1;
  while (++i < _) {
    res.push(i);
  }
  return res;
};

const add = (a, b) => a + b;
// 이미 리스트의 값으로 도출된 상태
range(5);
_.log(_.reducer(add, range(5)));

const L = {};
// 제너레이터로 만든 이터레이터는 실제 순회할때만 값이 발생됨
L.range = function*(l) {
  let res = [];
  let i = -1;
  while (++i < l) {
    yield i;
  }
};
L.range(5);
// 안에서 호출할때 값을 하나씩 생성됨
// 평가될때만 값을 반환함 - 지연호출
_.log(_.reducer(add, L.range(5)));

const test = (str, time, f) => {
  console.time(str);
  while (time--) f();
  console.timeEnd(str);
};

// 하나의 값이 실행될때마다 값을 평가하여 사용하는 것이 더 효율적임을 의미함
test("range", 1, () => _.reducer((a, b) => a + b, range(1000000)));
test("L.range", 1, () => _.reducer((a, b) => a + b, L.range(1000000)));

const take = (l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length === l) return res;
  }
  return res;
};

_.log(take(10, L.range(Infinity)));
