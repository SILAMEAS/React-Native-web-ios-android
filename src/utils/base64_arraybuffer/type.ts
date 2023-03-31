export interface ParseOptions {
  loose?: boolean;
  out?: new (size: number) => {[index: number]: number};
}
export interface Encoding {
  bits: number;
  chars: string;
  codes?: {[char: string]: number};
}
