class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        COLS = len(grid[0])
        flattened = [n for row in grid for n in row]
        shifted = flattened[-(k % len(flattened)):] + flattened[:-(k % len(flattened))]
        return [shifted[i:i+COLS] for i in range(0, len(shifted), COLS)]