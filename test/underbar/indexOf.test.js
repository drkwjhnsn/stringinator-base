const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const ary = [1, 2, 3];
    expect(_.indexOf(ary, 1)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const ary = [1, 2, 3];
    expect(_.indexOf(ary, 3)).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const ary = [1, 2, 3];
    expect(_.indexOf(ary, 4)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const ary = [1, 2, 1];
    expect(_.indexOf(ary, 1)).toBe(0);
  });

  it('starts searching at the given offset', () => {
    const ary = [1, 2, 1];
    expect(_.indexOf(ary, 1, 1)).toBe(2);
  });

});
