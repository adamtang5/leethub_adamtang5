class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        ans = [0]
        visited = set()
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        
        def inBounds(row, col):
            return row in range(ROWS) and col in range(COLS)
        
        def isLand(row, col):
            return inBounds(row, col) and grid[row][col] == 1
        
        def dfs(row, col, count):
            visited.add((row, col))
            for rowDiff, colDiff in dirs:
                newRow, newCol = row + rowDiff, col + colDiff
                if isLand(newRow, newCol) and (newRow, newCol) not in visited:
                    dfs(newRow, newCol, count)
                elif not isLand(newRow, newCol):
                    count[0] += 1
            return
                    
        for row in range(ROWS):
            for col in range(COLS):
                if isLand(row, col):
                    dfs(row, col, ans)
                    return ans[0]

                    