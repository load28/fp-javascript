const curry = <I, O>(f: any) => (a: I, ...as: any[]): O =>
  as.length ? f(a, ...as) : (...as: any[]) => f(a, ...as);

function map<I, O>(list: I[], fn: (t: I) => O): O[] {
  return list.map(fn);
}

function filter<I>(list: I[], fn: (t: I) => boolean): I[] {
  return list.filter(fn);
}

function flatMap<I, O>(list: I[], fn: (t: I) => O[]): O[] {
  return list.map(fn).reduce((prev, current) => [...prev, ...current]);
}

function goSync<I, O>(...as: any[]): O {
  return as.reduce((a: I, f: (p: any) => O) => f(a));
}

function go<I, O>(...as: any[]) {
  return curry(goSync<I, O>(...as));
}

interface User {
  id: number;
  name: string;
  food: string[];
}

const testCase: User[] = [
  { id: 0, name: '0', food: ['rice'] },
  { id: 1, name: '1', food: ['milk'] }
];

const result1 = map<User, number>(testCase, b => b.id);
const result2 = flatMap<User, string>(testCase, user => user.food);
const result3 = filter<User>(testCase, user => user.id === 0);

console.log(result1);
console.log(result2);
console.log(result3);

go<number, string>(20, (c: number) => console.log(c));
