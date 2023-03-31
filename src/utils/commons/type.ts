export type Opaque<V> = V & {
  readonly __opq__: unique symbol;
};
export type int32 = Opaque<number>;
export type int = Opaque<number>;
export type uint32 = Opaque<number>;
export type uint = Opaque<number>;
export declare const INT32_MIN: int32;
export declare const INT_MAX: int;
export declare const INT_MIN: int;
export declare const UINT32_MAX: uint32;
export declare const UINT_MAX: uint;
export declare const UINT_MIN: uint;

export type Dictionary<T = any> = {
  [k: string]: T;
};
export type AnyDictionary = Dictionary;
export type Nullable<V> = V | null | undefined;
export type Enumerate<N extends number, Acc extends number[] = []> =
  Acc['length'] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>;

export type NumberRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;
export type SortType = 'descending' | 'ascending' | undefined;
