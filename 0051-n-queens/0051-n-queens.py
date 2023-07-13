class Solution:
  def solveNQueens(self, n: int) -> List[List[str]]:
    def buildBoard(coords: List[int]) -> List[str]:
      ans = [['.' for _ in range(len(coords))] for _ in range(len(coords))]
      for r, c in enumerate(coords):
        ans[r][c] = 'Q'
      return [''.join(row) for row in ans]
    
    seqs = []
    
    def dfs(seq: List[int]) -> None:
      if len(seq) == n:
        seqs.append(seq)
        return
      
      redSet = set(seq)
      for r, c in enumerate(seq):
        if c+len(seq)-r in range(n):
          redSet.add(c+len(seq)-r)
        if c-len(seq)+r in range(n):
          redSet.add(c-len(seq)+r)
      for i in range(n):
        if i not in redSet:
          dfs(seq+[i])
    
    for i in range(n):
      dfs([i])
    return [buildBoard(seq) for seq in seqs]