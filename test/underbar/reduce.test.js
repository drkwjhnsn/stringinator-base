const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const ary = [1, 2, 3];
    const reduction = _.reduce(ary, (acc, ele) => acc + ele, 2);
    expect(reduction).toBe(8);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const ary = [1, 2, 3];
    const reduction = _.reduce(ary, (acc, ele) => acc + ele);
    expect(reduction).toBe(6);
  });

});
