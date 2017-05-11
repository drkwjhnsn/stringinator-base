const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const ary = [1, 2, 3];
    expect(_.last(ary, 1)).toBe(3);
  });

  it('returns the last 2 elements of an array', () => {
    const ary = [1, 2, 3];
    expect(_.last(ary, 2)).toEqual([2, 3]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const ary = [1, 2, 3];
    expect(_.last(ary, 5)).toEqual([1, 2, 3]);
  });
});
