const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      ary = [1, 2, 3];
      expect(_.every(ary)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      ary = [1, 3, 5];
      expect(_.every(ary, ele => ele % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      ary = [1, 4, 5];
      expect(_.every(ary, ele => ele % 2 === 1)).toBe(false);
    });
  });
});
