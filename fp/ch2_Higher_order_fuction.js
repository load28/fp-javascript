const log = console.log;
const br = () => console.log("\n\n"); //반환값으로 함수의 결과를 반환,

log("고차함수 - 함수를 값으로 다루는 함수");
log("1. 함수를 인자로 받아서 실행");
log("2. 인자를 받아서 함수를 리턴하는 함수");
/**
 *
 * @param {*} f 실제 실행되는 로직, (1) 이란 실행되는 로직안에서 필요한 매개변수
 */
const apy = f => f(1); // 풀어서 쓰면 apy = (a => a + 1)(1)
const add = a => a + 1;
const sub = a => a - 1;
log(`고차 함수 예제 1 - ${apy(add)}`);
log(`고차 함수 예제 1 - ${apy(sub)}`);
br();

// time함수는 어플리케이티브한 함수, 실제로 많이 쓰임 - 지수함수의 복잡도를 가지는 알고리즘으로 많이 수행됨
const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};
log(`고차 함수 예제 2 - `);
times(i => log(i + 3), 3);
br();

/**
 * 함수를 만들어서 반환하는 함수 (클로저)
 */
const addMaker = a => b => a + b;
log(`고차 함수 예제 3 - 함수를 반환하는 함수 - ${addMaker(3)}`);
log(`고차 함수 예제 3 - 함수를 반환하는 함수 - ${addMaker(3)(7)}`);
