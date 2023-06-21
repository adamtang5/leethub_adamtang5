class Solution:
  def solveSudoku(self, board: List[List[str]]) -> None:
    """
    Do not return anything, modify board in-place instead.
    """
    isSolved = False
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    subs = [set() for _ in range(9)]
    for r in range(9):
      for c in range(9):
        if board[r][c] != '.':
          d = int(board[r][c])
          subIdx = r//3*3 + c//3
          rows[r].add(d)
          cols[c].add(d)
          subs[subIdx].add(d)
    
    def backTrack(r: int, c: int) -> None:
      nonlocal isSolved, board
      if r == 9:
        isSolved = True
        return
      
      nextR = r+(c+1)//9
      nextC = (c+1)%9
      
      if board[r][c] != '.':
        backTrack(nextR, nextC)
      else:
        for d in range(1, 10):
          subIdx = r//3*3 + c//3
          if d not in rows[r] and d not in cols[c] and d not in subs[subIdx]:
            rows[r].add(d)
            cols[c].add(d)
            subs[subIdx].add(d)
            board[r][c] = str(d)
            
            backTrack(nextR, nextC)
            
            if not isSolved:
              rows[r].remove(d)
              cols[c].remove(d)
              subs[subIdx].remove(d)
              board[r][c] = '.'
    
    backTrack(0, 0)
          