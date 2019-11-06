const _ = require("./fx.js");

_.log("curry function");

const curry = f => (a, ...as) =>
  as.length ? f(a, ...as) : (...as) => f(a, ...as);

//TODO 자바스크립트 컴파일러의 동작방식 파악 필요
_.go(10, a => a + a, b => b + b, _.log);

// 함수를 받아서 수행
// 그렇기에 다른 map, reducer 같은 함수를 랩핑하기 좋음
const add = curry(a => a + a);

// 함수를 반환함
_.log(add(10).toString());
_.log(add(10)());
