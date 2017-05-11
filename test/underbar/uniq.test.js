const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const ary = [1, 2, 3, 2, 3, 4];
    expect(_.uniq(ary)).toEqual([1, 2, 3, 4]);
  });
});
