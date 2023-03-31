import {$ok} from '../commons';
import {AnyDictionary} from '../commons/type';

export class NGError extends Error {
  readonly info: AnyDictionary | undefined;
  constructor(message: string) {
    super(message);
  }
}

export class NGUniqueError extends Error {
  private static __timeoutError: NGUniqueError;
  constructor(message: string) {
    super(message);
  }
  static timeOutError() {
    if (!$ok(this.__timeoutError)) {
      this.__timeoutError = new NGUniqueError('TimeoutSingletonError');
    }
    return this.__timeoutError;
  }
}
