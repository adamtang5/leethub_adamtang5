class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        visited = set()
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        
        def inBounds(row, col):
            return row in range(ROWS) and col in range(COLS)
        
        def isLand(row, col):
            return inBounds(row, col) and grid[row][col] == 1
        
        def dfs(row, col):
            if not isLand(row, col):
                return 1
            if (row, col) in visited:
                return 0
            
            visited.add((row, col))
            ans = 0
            for rowDiff, colDiff in dirs:
                newRow, newCol = row + rowDiff, col + colDiff
                ans += dfs(newRow, newCol)
            return ans
                    
        for row in range(ROWS):
            for col in range(COLS):
                if isLand(row, col):
                    return dfs(row, col)

                    