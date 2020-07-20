import { find, findIndex, jsonParse } from "../src/fp-ts/fp-ts-1";
import { none } from "fp-ts/es6/Option";

test("Option - some, none", () => {
  const result_1 = findIndex([1, 2, 3, 4], (value) => value === 1);
  const result_2 = findIndex([1, 2, 3, 4], (value) => value === 0);
  expect(result_1).toBe({ _tag: "Some", value: 0 });
  expect(result_2).toBe({ _tag: "None" });
});

test("fromNullable", () => {
  const result_1 = find<number>([1, 2, 3, 4], (num: number) => num === 4);
  const result_2 = find<number>([1, 2, 3, 4], (num: number) => num === 5);
  expect(result_1).toBe({ _tag: "Some", value: 4 });
  expect(result_2).toBe(none);
});

test("tryCatch", () => {
  const result_1 = jsonParse('{"test": 1}');
  const result_2 = jsonParse("{12}");
  expect(result_1).toHaveProperty("right");
  expect(result_2).toHaveProperty("left");
});
