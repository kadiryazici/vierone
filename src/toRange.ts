interface Params {
   from: number;
   to: number;
   fn: (index: number) => void;
}

/**
 * @description Loops through 0 to given value, given value is not included, last is not included.
 * @example to: 20 -> 0, 1, 2, 3 ...... 19
 *
 * @param to End of range, to is not included
 * @param fn Callback function, it has one parameter which is current range value.
 */

export function toRange(to: Params['to'], fn: Params['fn']) {
   for (let index = 0; index < to; index++) {
      fn(index);
   }
}
