const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(2)).toBe(2);
  });

  it('returns the same array if given an array', () => {
    const ary = [1, 2, 3];
    expect(_.identity(ary)).toEqual([1, 2, 3]);
  });

  it('returns the same object if given an object', () => {
    const obj = {cat: 'dog', foo: 'bar'};
    expect(_.identity(obj)).toEqual({cat: 'dog', foo: 'bar'});
  });
});
