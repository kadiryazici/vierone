export const testPromiseResolveValue = 'resolved promise';
export const testPromiseRejectValue = 'rejected promise';

export function testPromise(kind: 'error' | 'data'): Promise<string> {
   return new Promise((resolve, reject) => {
      if (kind === 'error') {
         reject(testPromiseRejectValue);
      } else {
         resolve(testPromiseResolveValue);
      }
   });
}
