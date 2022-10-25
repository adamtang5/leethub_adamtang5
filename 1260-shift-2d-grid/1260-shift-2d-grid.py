class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        COLS = len(grid[0])
        grid1D = [n for row in grid for n in row]
        shifted1D = [0] * len(grid1D)
        for i in range(len(grid1D)):
            shifted1D[(i+k) % len(grid1D)] = grid1D[i]
            
        for i in range(len(shifted1D)):
            row = i // COLS
            col = i % COLS
            grid[row][col] = shifted1D[i]
        return grid