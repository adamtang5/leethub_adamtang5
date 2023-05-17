const lookup = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

function letterCombinations(digits: string): string[] {
  if (!digits.length) return []
  if (digits.length === 1) return lookup[digits].split('')
  
  const leadLetters: string[] = letterCombinations(digits[0])
  return leadLetters.map(ch => letterCombinations(digits.slice(1)).map(combo => ch + combo)).flat()
}