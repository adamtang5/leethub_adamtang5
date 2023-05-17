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

  let headCombos = letterCombinations(digits[0]);
  return headCombos.map(ch => letterCombinations(digits.slice(1)).map(combo => ch + combo)).flat();
};