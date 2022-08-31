LOOKUP = [
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

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0:
            return []
        else:
            ans = list(LOOKUP[int(digits[0])])
            digits = digits[1:]
            
            while len(digits):
                lead_ch = digits[0]
                digits = digits[1:]
                            
                d1_combos = list(LOOKUP[int(lead_ch)])
                ans = [combo + ch for combo in ans for ch in d1_combos]
            return ans