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

  const leadLetters = letterCombinations(digits[0]);
  return leadLetters.map(ch => letterCombinations(digits.slice(1)).map(combo => ch + combo)).flat();
};