class Solution:
    def checkXMatrix(self, grid: List[List[int]]) -> bool:
        def onDiag(r, c):
            return r == c or r+c+1 == len(grid)
        
        for r in range(len(grid)):
            for c in range(len(grid)):
                if onDiag(r, c) and grid[r][c] == 0 or not onDiag(r, c) and grid[r][c] != 0:
                    return False
        return True