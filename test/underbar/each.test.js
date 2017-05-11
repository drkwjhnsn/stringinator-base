const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    let count = 0;
    const array = [1, 2, 3];
    _.each(array, (ele, idx, ary) => {
      expect(ele).toBe(array[count]);
      expect(idx).toBe(count);
      expect(ary).toEqual(array);
      count++;
    });
    expect(count).toBe(array.length);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    let count = 0;
    const string = '123';
    _.each(string, (char, idx, str) => {
      expect(char).toBe(string[count]);
      expect(idx).toBe(count);
      expect(str).toBe(string);
      count++;
    });
    expect(count).toBe(string.length);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    let count = 0;
    const object = {a: 1, b: 2, c: 3};
    _.each(object, (prop, key, obj) => {
      expect(prop).toBe(obj[key]);
      expect(obj).toEqual(object);
      count++;
    });
    expect(count).toBe(Object.keys(object).length);
  });
});
