class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        rows = [''] * numRows
        newBase = (numRows - 1) * 2
        
        for i, ch in enumerate(s):
            iMod = i % newBase
            newIdxMod = iMod if iMod <= newBase / 2 else newBase - iMod
            rows[newIdxMod] += ch
            
        return ''.join(rows)