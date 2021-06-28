"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePromise = void 0;
/**
 * @description a promise wrapper for not being in hell of trycatch blocks.
 * @returns `Array` of 2 children. First one is data, second one is error. Both of them cannot be `Truthy` at the same time.
 * @example
 * ```typescript
 * const [data, error] = usePromise(fetch("https://url.com/get/data"));
 * if(error) {
 *    console.error(error.message);
 *    return;
 * }
 * doSomething.With.Data(data);
 * ```
 */
function usePromise(promise) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield promise;
            return [data, null];
        }
        catch (error) {
            return [null, error];
        }
    });
}
exports.usePromise = usePromise;
