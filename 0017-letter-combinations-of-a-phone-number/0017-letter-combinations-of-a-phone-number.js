/**
 * @param {string} digits
 * @return {string[]}
 */
const lookup = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};

var letterCombinations = function(digits) {
  if (!digits.length) return [];
  if (digits.length === 1) return lookup[digits[0]].split('');
  
  const leadLetters = letterCombinations(digits[0]);
  return leadLetters.map(ch => letterCombinations(digits.slice(1)).map(combo => ch + combo)).flat();
};