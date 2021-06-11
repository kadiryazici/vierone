interface Params {
    from: number;
    to: number;
    fn: (index: number) => void;
}
/**
 * @description Loops throught a range
 * starts from first parameter until last, last is not included.
 * @example from: 0, to: 20 -> 0, 1, 2, 3 ...... 19
 */
export declare function inRange(from: Params['from'], to: Params['to'], fn: Params['fn']): void;
export {};
