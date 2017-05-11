const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const ary = [1, 2, 4];
    expect(_.some(ary, ele => ele % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const ary = [2, 4, 6];
    expect(_.some(ary, ele => ele % 2 === 1)).toBe(false);
  });

});
