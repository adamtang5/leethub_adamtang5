class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        COLS = len(grid[0])
        flattened = [n for row in grid for n in row]
        k %= len(flattened)
        shifted = flattened[-k:] + flattened[:-k]
        return [shifted[i:i+COLS] for i in range(0, len(shifted), COLS)]