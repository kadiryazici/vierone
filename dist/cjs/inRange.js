"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inRange = void 0;
/**
 * @description Loops through a range
 * starts from first parameter until last, last is not included.
 * @example from: 0, to: 20 -> 0, 1, 2, 3 ...... 19
 *
 * @param from Beginning of range
 * @param to End of range, to is not included
 * @param fn Callback function, it has one parameter which is current range value.
 */
function inRange(from, to, fn) {
    for (let index = from; index < to; index++) {
        fn(index);
    }
}
exports.inRange = inRange;
