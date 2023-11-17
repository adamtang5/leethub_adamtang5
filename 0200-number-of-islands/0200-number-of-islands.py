class Solution:
  def numIslands(self, grid: List[List[str]]) -> int:
    if not grid: return 0

    ROWS, COLS = len(grid), len(grid[0])
    ans, visited = 0, set()
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    def inBounds(row, col):
      return row in range(ROWS) and col in range(COLS)

    def valid(row, col):
      return inBounds(row, col) and (row, col) not in visited and grid[row][col] == '1'

    def bfs(row, col):
      q = collections.deque()
      visited.add((row, col))
      q.append((row, col))
      
      while q:
        currRow, currCol = q.popleft()
        for rowDiff, colDiff in dirs:
          newRow, newCol = currRow+rowDiff, currCol+colDiff
          if valid(newRow, newCol):
            q.append((newRow, newCol))
            visited.add((newRow, newCol))

    for row in range(ROWS):
      for col in range(COLS):
        if valid(row, col):
          bfs(row, col)
          ans += 1

    return ans