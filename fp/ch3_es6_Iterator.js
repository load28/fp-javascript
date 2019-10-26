const log = console.log;
const br = () => console.log("\n\n");

log("일반적인 순회");
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  log(arr[i]);
}

br();

log("유사배열 순회");
const str = "abcd";
for (let i = 0; i < str.length; i++) {
  log(str[i]);
}

br();

log("es6 순회");
const arr2 = [1, 2, 3];
for (let i of arr2) {
  log(i);
}

// 이터러블 : 이터레이터를 리턴하는 [Sysbol.iterator]() 를 가진 값
// 이터레이터: {value, done} 을 리턴하는 next() 를 가진 값
// 이터레이터/ 이터러블 프로토콜: 이터러블을 for, of  전개 연산자와 함께 동작하도록 규약
log("es6 array");
const arr3 = [1, 2, 3];
// arr3[Symbol.iterator] = null; // error
let iter = arr3[Symbol.iterator]();
for (let a of iter) log(a);

br();

log("es6 set");
const set = new Set([1, 2, 3]);
let setIter = set[Symbol.iterator]();
for (let a of setIter) log(a);
br();

log("es6 map");
const map = new Map([["a", 1], ["b", 2]]);
let mapIter = map[Symbol.iterator]();
for (let a of mapIter) log(a);
br();

log("es6 map key,value");
let mapIter1 = map.keys()[Symbol.iterator]();
log(mapIter1);
for (let a of mapIter1) log(a);
let mapIter2 = map.values()[Symbol.iterator]();
for (let a of mapIter2) log(a);
let mapIter3 = map.values();
let it = mapIter3[Symbol.iterator]();
log(it.next());
log(it.next());
log(it.next());
