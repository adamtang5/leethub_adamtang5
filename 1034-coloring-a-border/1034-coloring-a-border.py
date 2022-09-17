class Solution:
    def colorBorder(self, grid: List[List[int]], row: int, col: int, color: int) -> List[List[int]]:
        ROWS, COLS, SCOLOR = len(grid), len(grid[0]), grid[row][col]
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        visited = set()
        borderCells = []
        
        def inBounds(r, c):
            return r in range(ROWS) and c in range(COLS)
        
        def onEdge(r, c):
            return r == 0 or r+1 == ROWS or c == 0 or c+1 == COLS
        
        def colorEdge(r, c):
            for dr, dc in dirs:
                newR, newC = r+dr, c+dc
                if inBounds(newR, newC) and grid[newR][newC] != SCOLOR:
                    return True
            return False
        
        def isBorder(r, c):
            return onEdge(r, c) or colorEdge(r, c)
        
        def valid(r, c):
            return inBounds(r, c) and (r, c) not in visited and grid[r][c] == SCOLOR
        
        def dfs(r, c):
            if (r, c) not in visited and inBounds(r, c):
                visited.add((r, c))
                if isBorder(r, c):
                    borderCells.append([r, c])
                for dr, dc in dirs:
                    newR, newC = r+dr, c+dc
                    if valid(newR, newC):
                        dfs(newR, newC)
                    
        dfs(row, col)
        for r, c in borderCells:
            grid[r][c] = color
        return grid