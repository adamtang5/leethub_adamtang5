/**
 * @param {string} digits
 * @return {string[]}
 */

/*
data structure: 2D array of length 10, storing letters into element of index
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
    // base case
    if (!digits.length) return [];
    if (digits.length === 1) return lookup[+digits].split('');
    
    // recursive case
    let d1Combos = letterCombinations(digits[0]);
    
    return d1Combos.map(ch => {
        return letterCombinations(digits.slice(1)).map(combo => ch + combo);
    }).flat();
};