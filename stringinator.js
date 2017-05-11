const _ = require('./underbar');

const first = function(str, n = 1) {
  return _.first(str, n);
};

const last = function(str, n = 1) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return _.reject(str, char => char === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str, char => char === target);
};

const isOnlyDigits = function(str) {
  return /^\d+$/.test(str) || str === '';
};

const filterToOnlyDigits = function(str) {
  return _.filter(str, char => /\d/.test(char)).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, item => truncateString(item, maxLength));
};

const countChars = function(str) {
  let charRoster = {};
  _.each(str, char => (charRoster[char]++) || (charRoster[char] = 1));
  return charRoster;
};

const dedup = function(str) {
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};
