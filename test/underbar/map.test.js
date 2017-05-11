const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const ary = [1, 2, 3];
    expect(_.map(ary, ele => ele * ele)).toEqual([1, 4, 9]);
  });
});
