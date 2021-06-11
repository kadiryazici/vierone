/**
 * @description Loops throught a range
 * starts from first parameter until last, last is not included.
 * @example from: 0, to: 20 -> 0, 1, 2, 3 ...... 19
 */
export function inRange(from, to, fn) {
    for (let index = from; index < to; index++) {
        fn(index);
    }
}
