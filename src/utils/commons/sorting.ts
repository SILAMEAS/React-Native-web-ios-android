import {SortType} from './type';

interface Options<T> {
  propSort: keyof T;
  ordering: SortType;
  isDate?: boolean;
}

export const sort = <T>(
  data: T[] | undefined,
  option: Options<T>,
  callback?: (data: T | undefined) => void,
): T | undefined => {
  console.log(data && data[0][option.propSort]);
  const compareFn = (a: T, b: T) => {
    if (option.isDate) {
      const value1 = b[option.propSort] as string;
      const value2 = a[option.propSort] as string;
      return option.ordering !== 'ascending'
        ? +new Date(value1) - +new Date(value2)
        : +new Date(value2) - +new Date(value1);
    }
    return option.ordering !== 'ascending'
      ? (b[option.propSort] as any) - (a[option.propSort] as any)
      : (a[option.propSort] as any) - (b[option.propSort] as any);
  };
  const _data = data?.sort(compareFn);
  callback && callback(_data ? (data as T) : undefined);
  return !_data ? undefined : (data as T);
};
