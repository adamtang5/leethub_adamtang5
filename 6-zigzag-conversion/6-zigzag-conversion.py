class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        rows = [''] * numRows
        newBase = (numRows - 1) * 2
        
        newIdxMods = [0] * newBase
        for i in range(newBase):
            newIdxMods[i] = i if i <= newBase / 2 else newBase - i
        
        for i, ch in enumerate(s):
            iMod = i % newBase
            rows[newIdxMods[iMod]] += ch
            
        return ''.join(rows)