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

const prod = [
  { name: "prod-1", price: 100, q: 1 },
  { name: "prod-2", price: 200, q: 2 },
  { name: "prod-3", price: 300, q: 3 }
];

const add2 = (a, b) => a + b;
const total = _.pipe(
  _.map(p => p.price),
  _.reducer(add2)
);

const base_total = predi =>
  _.pipe(
    _.filter(predi),
    total
  );
_.go(prod, base_total(p => p.price < 300), _.log);

// 추상화 레벨을 높임
const sum = (f, iter) => _.go(iter, _.map(f), _.reducer(add2));

_.log(sum(p => p.q, prod));
_.log(sum(p => p.q * p.price, prod));

// 파이프 라인의 특징은 지연평가가 가능하다는 것이다
// 일반 축약
const total_p = _.pipe(
  _.map(p => p.q * p.price),
  _.reducer(add2)
);
const total_q = _.pipe(
  _.map(p => p.q),
  _.reducer(add2)
);

// 추상화를 이용한 함수 구성
// 전체적인 동작이 동일하며 세부적인 파라미터만 다르다면, 추상화 함수를 이용하여 구성하는 것이 바르다.
const total_q_2 = p => sum(p => p.price * p.q, p);
const total_p_2 = p => sum(p => p.price, p);

_.log(total_q_2(prod));
_.log(total_p_2(prod));
