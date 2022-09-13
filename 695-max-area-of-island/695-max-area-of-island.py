class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        visited = set()
        maxSize = 0
        
        def inBounds(row, col):
            return row in range(ROWS) and col in range(COLS)
        
        def valid(row, col):
            return inBounds(row, col) and (row, col) not in visited and grid[row][col] == 1
        
        def dfs(row, col):
            if not valid(row, col):
                return 0
            else:
                visited.add((row, col))
                return 1 + dfs(row+1, col) + dfs(row-1, col) + dfs(row, col+1) + dfs(row, col-1)
            
        for row in range(ROWS):
            for col in range(COLS):
                if valid(row, col):
                    maxSize = max(maxSize, dfs(row, col))
                    
        return maxSize