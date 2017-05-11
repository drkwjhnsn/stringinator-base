const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      {name: 'Brendon', age: 12},
      {name: 'Brindon', age: 13},
      {name: 'Brandon', age: 11}
    ];
    expect(_.pluck(people, 'age')).toEqual([12, 13, 11]);
  });

});
