import {$iCast} from './number';
import {sort} from './sorting';
import {INT_MAX, INT_MIN, Nullable, uint, UINT_MAX, UINT_MIN} from './type';

export function $ok(o: any): boolean {
  return o !== undefined && typeof o !== 'undefined' && o !== null;
}
export function $count<T = any>(a: Nullable<ArrayLike<T>>) {
  return $ok(a) ? a?.length : 0;
}
export function $isint(o: any): boolean {
  return (
    $ok(o) &&
    typeof o === 'number' &&
    Number.isSafeInteger(o) &&
    o >= INT_MIN &&
    o <= INT_MAX
  );
}
export function $toUnsigned(v: Nullable<string | number>, defaultValue?: uint) {
  if (!$ok(v)) {
    return defaultValue;
  }
  if (typeof v === 'string') {
    v = parseInt(v, 10);
  }
  return isNaN(v!)
    ? defaultValue
    : Math.max(UINT_MIN, $iCast(Math.min(v!, UINT_MAX)));
}

export function $timeOut(
  promise: Promise<any>,
  time: number,
  exception: any,
): Promise<any> {
  let timer: any;
  return Promise.race([
    promise,
    new Promise(
      (_, rejection) => (timer = setTimeout(rejection, time, exception)),
    ),
  ]).finally(() => clearTimeout(timer));
}

export function $isObject(item: any) {
  return typeof item === 'object' && !Array.isArray(item) && item !== null;
}

export {sort};
