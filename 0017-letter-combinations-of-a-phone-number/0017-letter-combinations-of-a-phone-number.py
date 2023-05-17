LOOKUP = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

class Solution:
  def letterCombinations(self, digits: str) -> List[str]:
    if len(digits) == 0: return []
    if len(digits) == 1: return list(LOOKUP[digits])

    lead_letters = self.letterCombinations(digits[0])
    return [ch + combo for combo in self.letterCombinations(digits[1:]) for ch in lead_letters]