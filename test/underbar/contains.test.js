const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const ary = [1, 2, 3];
    const tar = 2;
    expect(_.contains(ary, tar)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const ary = [1, 2, 3];
    const tar = 4;
    expect(_.contains(ary, tar)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {a: 1, b: 2, c: 3};
    const tar = 2;
    expect(_.contains(obj, tar)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const obj = {a: 1, b: 2, c: 3};
    const tar = 4;
    expect(_.contains(obj, tar)).toBe(false);
  });

});
