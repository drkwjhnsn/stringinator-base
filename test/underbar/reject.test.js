const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const ary = [1, 2, 3, 4, 5];
    expect(_.reject(ary, ele => ele % 2 === 1)).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const obj = { 'a': 1, 'b': null, 'c': 3 };
    expect(_.reject(obj, ele => ele === null)).toEqual([1, 3]);
  });
});
