class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        ROWS, COLS = len(image), len(image[0])
        dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        visited = set()
        
        def inBounds(r, c):
            return r in range(ROWS) and c in range(COLS)
        
        def dfs(row, col):
            scolor = image[row][col]
            
            def valid(r, c):
                return inBounds(r, c) and (r, c) not in visited and image[r][c] == scolor
            
            image[row][col] = color
            visited.add((row, col))
            for rowDiff, colDiff in dirs:
                newRow, newCol = row + rowDiff, col + colDiff
                if valid(newRow, newCol):
                    dfs(newRow, newCol)
                    
        dfs(sr, sc)
        return image