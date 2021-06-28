import { usePromise, inRange, toRange, isTruthy } from '../src/index';
import {
   testPromise,
   testPromiseResolveValue,
   testPromiseRejectValue
} from './helpers';

describe('Tests to test all function', () => {
   it('should reject promise and return error', async () => {
      const [data, error] = await usePromise(testPromise('error'));
      expect(data).toBeNull();
      // expect(error).toBeInstanceOf(Error);
      expect(error).toEqual(testPromiseRejectValue);
   });

   it('should resolve promise and return string data', async () => {
      const [data, error] = await usePromise(testPromise('data'));
      expect(error).toBeNull();
      expect(data).not.toBeNull();
      expect(data).toEqual(testPromiseResolveValue);
   });

   it('should push indexes in range to an array', () => {
      const array: number[] = [];
      inRange(0, 20, index => {
         array.push(index);
      });
      expect(array[0]).toEqual(0);
      expect(array[array.length - 1]).toEqual(19);
      expect(array.length).toEqual(20);
   });

   it('should loop from 0 to given value', () => {
      const array: number[] = [];
      toRange(20, index => {
         array.push(index);
      });
      expect(array[0]).toEqual(0);
      expect(array[array.length - 1]).toEqual(19);
      expect(array.length).toEqual(20);
   });

   it('should return true for Truthy values', () => {
      expect(isTruthy(null)).toBe(false);
      expect(isTruthy(undefined)).toBe(false);
      expect(isTruthy('')).toBe(true);
      expect(isTruthy(0)).toBe(true);
      expect(isTruthy(NaN)).toBe(true);
   });
});
