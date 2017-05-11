const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const ary = [1, 2, 3, 4, 5];
    expect(_.filter(ary, ele => ele % 2 === 1)).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const ary = [1, 'a', true, 3, '5'];
    expect(_.filter(ary, ele => typeof ele === 'number')).toEqual([1, 3]);
  });
});
