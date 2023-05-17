const lookup: string[] = [
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
]

function letterCombinations(digits: string): string[] {
  if (!digits.length) return []
  if (digits.length === 1) return lookup[+digits].split('')
  
  let headCombos: string[] = letterCombinations(digits[0])
  return headCombos.map(ch => letterCombinations(digits.slice(1)).map(combo => ch + combo)).flat()
}