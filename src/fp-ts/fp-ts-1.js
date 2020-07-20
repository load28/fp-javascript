"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Option_1 = require("fp-ts/lib/Option");
/**
 * 결과 값이 로직에 따라 존재 또는 존재 하지 않을때  Option을 사용
 * @param as - array
 * @param predicate - find method
 * Option is none or some
 */
function findIndex(as, predicate) {
    const index = as.findIndex(predicate);
    return index === -1 ? Option_1.none : Option_1.some(index);
}
const result = findIndex([1, 2, 3, 4], (value) => value === 1);
console.log(result); // {_tag: 'Some', value: 0);
console.log(Option_1.none); // {_tag: 'None'}
function find(as, predicate) {
    return Option_1.fromNullable(as.find(predicate));
}
console.log(find([1, 2, 3, 4], (num) => num === 4));
//# sourceMappingURL=fp-ts-1.js.map