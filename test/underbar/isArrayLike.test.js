const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    expect(_.isArrayLike('')).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    expect(_.isArrayLike({})).toBe(false);
  });
});
