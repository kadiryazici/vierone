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
export async function usePromise(promise) {
    try {
        const data = await promise;
        return [data, null];
    }
    catch (error) {
        return [null, error];
    }
}
