/**
 * 결과 값이 로직에 따라 존재 또는 존재 하지 않을때  Option을 사용
 * @param as - array
 * @param predicate - find method
 * Option is none or some
 */
import { fromNullable, none, Option, some } from "fp-ts/es6/Option";
import { Either, tryCatch } from "fp-ts/es6/Either";

export function findIndex<T>(
  as: T[],
  predicate: (a: T) => boolean
): Option<number> {
  const index = as.findIndex(predicate);
  return index === -1 ? none : some(index);
}

/**
 * fromNullable의 인자로 값을 넘기면, 인자의 값이 null 또는 undefined면 none을 반환한다.
 * @param as
 * @param predicate
 */
export function find<T>(as: Array<T>, predicate: (a: T) => boolean): Option<T> {
  return fromNullable(as.find(predicate));
}

/**
 * 예외처리에 대해서 trycatch 함수의 두번째 파라미터를 이용해서 처리 할 수 있다.
 * @param json
 */
export function jsonParse(json: string): Either<Error, unknown> {
  return tryCatch(
    () => JSON.parse(json),
    (error) => new Error(String(error))
  );
}
