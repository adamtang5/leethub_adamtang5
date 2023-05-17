/**
 * @param {string} digits
 * @return {string[]}
 */
const lookup = [
  '',
  '',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz',
];

var letterCombinations = function(digits) {
  if (!digits.length) return [];
  if (digits.length === 1) return lookup[+digits].split('');

  let d1Combos = letterCombinations(digits[0]);
  return d1Combos.map(ch => letterCombinations(digits.slice(1)).map(combo => ch + combo)).flat();
};