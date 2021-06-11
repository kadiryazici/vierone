"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inRange = void 0;
/**
 * @description Loops throught a range
 * starts from first parameter until last, last is not included.
 * @example from: 0, to: 20 -> 0, 1, 2, 3 ...... 19
 */
function inRange(from, to, fn) {
    for (let index = from; index < to; index++) {
        fn(index);
    }
}
exports.inRange = inRange;
