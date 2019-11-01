function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 10; // 일반적인 for문에서는 제외됨
}

const iter = gen();
for (const a of iter) console.log(a);

// 무한수열 함수는 무한수열을 생성하는 것에만 집중되어야 함
// 그렇기에 제한된 값까지 생성하는 역활은 다른 함수에서 실행되는게 맞으며, 제어는 한곳에서 이루어지는게 맞음
function* infinity(start) {
  while (true) {
    yield start++;
  }
}
console.log("홀수 찍어내기");
function* odd(limit) {
  for (let a = 0; a < limit; a++) {
    if (a % 2) yield a;
  }
}
let iter2 = odd(10);
for (const a of iter2) console.log(a);

console.log("무한 수열응용");
function* odd2(limit) {
  for (const a of infinity(0)) {
    if (a % 2) yield a;
    if (limit < a) return;
  }
}
let iter3 = odd2(5);
for (const a of iter3) console.log(a);

// 제한 함수
function* limitF(l, i) {
  for (const a of i) {
    yield a;
    if (a === l) return;
  }
}

function* jugment(i) {
  for (const a of i) {
    if (a % 2) yield a;
  }
}

console.log("limit,무한 수열응용");
// 이터레이터는 평가되기전에는 실행되지 않음, 그러므로 lazy excute
function* odd3(limit = 0) {
  for (const a of limitF(limit, infinity(0))) {
    if (a % 2) yield a;
  }
}
for (const a of odd3(10)) console.log(a);

console.log("구조분해, 이터레이터가 사용되는 함수");
console.log(...odd3(10));
console.log(...odd3(3), ...odd3(10));
const [head, ...back] = odd3(10);
console.log(head, back);
