export interface Page<T> {
  results: T[];
  total: number;
}

export interface Header {
  DefaultLanguage: string;
  Accept: string;
  Certignarole: number;
}

export type QueryString<T> = Partial<{
  [key: string]: string | number | number[] | string[];
}> &
  T;

export interface UserData {}
export type ManifestData = object | null | undefined;
