class Solution:
  def solve(self, board: List[List[str]]) -> None:
    """
    Do not return anything, modify board in-place instead.
    """
    def isEdge(r: int, c: int) -> bool:
      return r == 0 or r == len(board)-1 or c == 0 or c == len(board[0])-1
    
    def inBound(r: int, c: int) -> bool:
      return r in range(len(board)) and c in range(len(board[0]))
    
    edgeIsland = []
    dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    
    for r in range(len(board)):
      for c in range(len(board[0])):
        if isEdge(r, c) and board[r][c] == "O":
          edgeIsland.append([r, c])
    
    visited = set()
    for r, c in edgeIsland:
      visited.add((r, c))
      queue = [[r, c]]
      while queue:
        currR, currC = queue.pop(0)
        for rowD, colD in dirs:
          newR, newC = currR+rowD, currC+colD
          if inBound(newR, newC) and (newR, newC) not in visited and board[newR][newC] == "O":
            queue.append([newR, newC])
            visited.add((newR, newC))
    
    for r in range(len(board)):
      for c in range(len(board[0])):
        if not isEdge(r, c) and (r, c) not in visited:
          board[r][c] = "X"