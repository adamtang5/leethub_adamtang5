class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0
        
        ROWS, COLS = len(grid), len(grid[0])
        visited = set()
        ans = 0
        
        def inBounds(row, col):
            return row in range(ROWS) and col in range(COLS)
        
        def valid(row, col):
            return inBounds(row, col) and (row, col) not in visited and grid[row][col] == '1'
        
        def dfs(row, col):
            if not valid(row, col):
                return 0
            else:
                visited.add((row, col))
                fundDirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
                for rowDiff, colDiff in fundDirs:
                    newRow, newCol = row + rowDiff, col + colDiff
                    dfs(newRow, newCol)
                return 1
            
        for row in range(ROWS):
            for col in range(COLS):
                if (row, col) not in visited:
                    ans += dfs(row, col)
                    
        return ans